import express from "express";

import multer from "multer";
import path from "path";
import fs from "fs";
import productController from "../../../controller/ProController/ProductController.js";
const productRouter = express.Router();

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Use __dirname in your code
const uploadDir = path.resolve(__dirname, '../upload');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleDateString("default", { month: "long" });
    const uploadPath = path.resolve(uploadDir, String(year), month);
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extention = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${extention}`);
  },
});

const upload = multer({ storage });

productRouter.post(
  "/create",
  upload.single("image"),
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
