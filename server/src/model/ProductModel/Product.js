import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    discount:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
    createAt:{
        type:Date,
        default: Date.now()
    }
});

const ProductModel = new mongoose.model("product",productSchema,"product");

export default ProductModel;