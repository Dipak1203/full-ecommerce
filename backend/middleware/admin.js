import { User } from "../models/index.js"
import CustomErrorHandler from "../service/CustomErrorHandler.js";

const admin = async (req,res,next) =>{
    try {
        const user = await User.findOne({_id:req.user._id})

        if(user.role === 'admin'){
            next();
        }else{
            return next(CustomErrorHandler.unAuthorized)
        }
    } catch (error) {
        return next(CustomErrorHandler.serverError());
    }
}

export default admin;