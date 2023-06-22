import express from "express";

import multer from "multer";
import path from "path";
import fs from "fs";
import productController from "../../../controller/ProController/ProductController.js";
import auth from "../../../middleware/auth.js";
import admin from "../../../middleware/admin.js";
const productRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('default', { month: 'long' });

    const uploadDir = path.resolve(`../upload/${year}/${month}`);
    fs.mkdirSync(uploadDir, { recursive: true }); // Create the month-wise directory if it doesn't exist

    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${extension}`);
  },
});

const upload = multer({ storage });

productRouter.post(
  "/create",
  upload.single("image"),[auth,admin],
  async (req, res) => {
    try {
      await productController.create(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

export default productRouter;
