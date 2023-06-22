import CustomErrorHandler from "../service/CustomErrorHandler.js";
import JwtService from "../service/JwtService.js";

const auth = async (req,res,next) =>{
    let authHeader = req.headers.authorization;
    // console.log(authHeader);

    if(!authHeader){
        return next(CustomErrorHandler.unAuthorized())
    }

    const token = authHeader.split(' ')[1];
    // console.log(token)

    try {
        const {_id,role} = await JwtService.verify(token);
        const user = {
            _id,
            role
        }
        req.user = user;
        next();
    } catch (error) {
        return next(CustomErrorHandler.unAuthorized())
    }

}

export default auth;