import {branchModel} from '../../model/ProductModel/ProductModel.js'


const BranchController = {

    async create(req,res){
        const {productBranch} = req.body;
        try {
            const document = await branchModel.create({productBranch});
            if(document){
                res.status(201).json({message:'document added',document});
            }
        } catch (error) {
            res.status(501).json({message:'internal server error'});
        }
    }
}

export default BranchController;