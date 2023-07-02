import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{type:String,required:false},
    email:{type:String,required:false,unique:false},
    password:{type:String,required:false},
},{timestamps:true})

const Admin = mongoose.model('Admin',userSchema,'admin');
export default Admin;