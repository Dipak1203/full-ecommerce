import express from 'express';
import CategoryController from  '../../../controller/ProController/CategoryController.js'
const categoryRouter = express.Router();


categoryRouter.post("/create",async (req,res) =>{
    await CategoryController.create(req,res);
})

export default categoryRouter;