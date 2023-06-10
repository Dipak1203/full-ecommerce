import {categoryModel} from '../../model/ProductModel/ProductModel.js'


const CategoryController = {

    async create(req,res){
        const {productCategory} = req.body;
        console.log(productCategory)
        try {
            const document = await categoryModel.create({productCategory});
            if(document){
                res.status(201).json({message:'document added',document});
            }
        } catch (error) {
            res.status(501).json({message:'internal server error'});
        }
    }
}

export default CategoryController;