import express from 'express';
import BranchController from  '../../../controller/ProController/BranchController.js'
const branchRouter = express.Router();


branchRouter.post("/create",async (req,res) =>{
    await BranchController.create(req,res);
})

export default branchRouter;