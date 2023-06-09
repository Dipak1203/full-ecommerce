import mongoose from 'mongoose';

const adminLoginSchema = mongoose.Schema({
   username:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true,
   }
});

const adminLoginModel = mongoose.model("admin",adminLoginSchema);

export default adminLoginModel;