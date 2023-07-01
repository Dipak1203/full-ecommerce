import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId:{type:String,require:true},
    name:{type:String,required:false},
    email:{type:String,required:false,unique:false},
    image:{type:String,required:false},
},{timestamps:true})

export default mongoose.model('User',userSchema,'users');