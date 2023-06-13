import path from 'path';
import ProductModel from '../../model/ProductModel/Product.js';

const productController = {
  async create(req, res) {
    try {
      // Check if a file was uploaded
      if (!req.file) {
        return res.status(400).json({ error: 'Image file is required' });
      }

      const { name, price, title, discount, category, branch, size, description } = req.body;
      const { filename: image } = req.file; // Use 'filename' instead of 'image' property from req.file

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
      console.error(error); // Log the error for debugging purposes
      return res.status(500).json({ error: 'Internal server error' });
    }
  },
};

export default productController;
