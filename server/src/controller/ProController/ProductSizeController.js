import {productSizeModel} from '../../model/ProductModel/ProductModel.js'


const productSizeController = {

    async create(req,res){
        const {sizeProduct} = req.body;
        try {
            const document = await productSizeModel.create({sizeProduct});
            if(document){
                res.status(201).json({message:'document added',document});
            }
        } catch (error) {
            res.status(501).json({message:'internal server error'});
        }
    }
}

export default productSizeController;