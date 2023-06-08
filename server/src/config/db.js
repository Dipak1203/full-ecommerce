import mongoose from "mongoose";
import {DB_URI} from './config.js'
mongoose.connect(DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() =>{
    console.log("Database connection success");
})
.catch(() =>{
    console.log("Database is not connect")
})