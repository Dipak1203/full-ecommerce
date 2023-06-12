import ProductModel from "../../model/ProductModel/Product.js";
import multer from "multer";
import path from 'path';
import fs from 'fs';

const uploadDir = path.join(new URL('../upload', import.meta.url).pathname);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleDateString('default', { month: 'long' });
    const uploadPath = path.resolve(uploadDir, String(year), String(month));
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extention = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${extention}`);
  },
});

const upload = multer({ storage });

const productController = {
  async create(req, res) {
    const { name, price, title, discount, category, branch, size, description } = req.body;
    const { filename } = req.file;
    console.log(filename)
    try {
      // Check if a file was uploaded
      if (!req.file) {
        return res.status(400).json({ error: 'Image file is required',file});
      }

      const { filename } = req.file;
      console.log(filename)

      const image = path.join(uploadDir, filename);

      const document = await ProductModel.create({
        name,
        price,
        title,
        discount,
        category,
        branch,
        size,
        description,
        image,
      });

      return res.status(201).json(document);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  },
};

export default productController;
