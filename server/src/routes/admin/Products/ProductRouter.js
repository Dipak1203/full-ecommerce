import express from 'express';
import productController from '../../../controller/ProController/ProductController.js';

const productRouter = express.Router();

productRouter.post("/create",async(req,res) =>{
    await productController.create(req,res);
})


export default productRouter;