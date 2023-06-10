import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    productCategory:{
        type:String,
        required:true,
    },
    createAt: {
        type:Date,
        default:Date.now()
    }
})

const categoryModel = new mongoose.model("ProductCategory",categorySchema);

const branchSchema = new mongoose.Schema({
    category:{
        type:String,
        required:true,
        createAt:Date.now()
    },
})

const branchModel = new mongoose.model("ProductBranch",branchSchema);


const productSize = new mongoose.Schema({
    category:{
        type:String,
        required:true,
        createAt:Date.now()
    },
})

const productSizeModel = new mongoose.model("ProductSize",productSize);


export {categoryModel,branchModel,productSizeModel};
