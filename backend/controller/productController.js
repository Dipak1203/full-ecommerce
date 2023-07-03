import { Product } from "../models/index.js";
import multer from "multer";
import path from "path";
import productSchema from "../validator/productValidator.js";
import fs from "fs";
import CustomErrorHandler from "../service/CustomErrorHandler.js";
import appRoot from "../server.js";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString("default", { month: "long" });

    const uploadDir = path.resolve(`../upload/${year}/${month}`);
    fs.mkdirSync(uploadDir, { recursive: true }); // Create the month-wise directory if it doesn't exist

    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${extension}`);
  },
});

const handleMultipartData = multer({
  storage,
  limits: { fileSize: 1000000 * 5 },
}).single("image"); // 5MB

const productController = {
  async store(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) {
        console.log(err); // Add this line to log the error details
        return next(CustomErrorHandler.serverError(err.message));
      }
      let filePath;
      if (req.file) {
        filePath = req.file.path;
      }

      // validation
      const { error } = productSchema.validate(req.body);
      if (error) {
        // Delete the uploaded file
        if (req.file) {
          fs.unlink(path.join(appRoot, filePath), (err) => {
            if (err) {
              res.json({ message: "errors" });
              // return next(CustomErrorHandler.serverError());
            }
          });
        }
        // return next(error);
        res.json({ message: "errorss" });
      }

      const { name, price, size, category, searchKey, gender } = req.body;

      let document;
      try {
        document = await Product.create({
          name,
          price,
          size,
          image: filePath,
          category,
          searchKey,
          gender,
        });
      } catch (err) {
        res.json({ message: "error" });
      }
      res.status(201).json(document);
    });
  },

  update(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) {
        return next(CustomErrorHandler.serverError(err.message));
      }
      let filePath;
      if (req.file) {
        filePath = req.file.path;
      }

      // validation
      const { error } = productSchema.validate(req.body);
      if (error) {
        // Delete the uploaded file
        if (req.file) {
          fs.unlink(`${appRoot}/${filePath}`, (err) => {
            if (err) {
              return next(CustomErrorHandler.serverError(err.message));
            }
          });
        }

        return next(error);
        // rootfolder/uploads/filename.png
      }

      const { name, price, size } = req.body;
      let document;
      try {
        document = await Product.create({
          name,
          price,
          size,
          image: filePath,
          category,
        });
      } catch (err) {
        console.log(err); // Add this line to log the error details
        return next(CustomErrorHandler.serverError());
      }

      res.status(201).json(document);
    });
  },

  async destroy(req, res, next) {
    const document = await Product.findOneAndRemove({ _id: req.params.id });
    if (!document) {
      return next(new Error("Nothing to delete"));
    }
    // image delete
    const imagePath = document._doc.image;
    // http://localhost:5000/uploads/1616444052539-425006577.png
    // approot/http://localhost:5000/uploads/1616444052539-425006577.png
    fs.unlink(`${appRoot}/${imagePath}`, (err) => {
      if (err) {
        return next(CustomErrorHandler.serverError());
      }
      return res.json(document);
    });
  },
  async index(req, res, next) {
    let documents;
    // pagination mongoose-pagination
    try {
      documents = await Product.find()
        .select("-updatedAt -__v")
        .sort({ _id: -1 });
    } catch (err) {
      return next(CustomErrorHandler.serverError());
    }
    return res.json(documents);
  },
  async show(req, res, next) {
    let document;
    try {
      document = await Product.findOne({ _id: req.params.id }).select(
        "-updatedAt -__v"
      );
    } catch (err) {
      return next(CustomErrorHandler.serverError());
    }
    return res.json(document);
  },
  async getProducts(req, res, next) {
    let documents;
    try {
      documents = await Product.find({
        _id: { $in: req.body.ids },
      }).select("-updatedAt -__v");
    } catch (err) {
      return next(CustomErrorHandler.serverError());
    }
    return res.json(documents);
  },
};

export default productController;
