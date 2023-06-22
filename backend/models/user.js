import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{type:String,required:false},
    email:{type:String,required:false,unique:false},
    password:{type:String,required:false},
    role:{type:String,default:'customer'}
},{timestamps:true})

export default mongoose.model('User',userSchema,'users');