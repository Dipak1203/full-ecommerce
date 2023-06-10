import express from 'express';
import productSizeController from '../../../controller/ProController/ProductSizeController.js'
const sizeRouter = express.Router();


sizeRouter.post("/create",async (req,res) =>{
    await productSizeController.create(req,res);
})

export default sizeRouter;