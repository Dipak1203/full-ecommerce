import Joi from "joi";
import CustomErrorHandler from "../../service/CustomErrorHandler.js";
import { RefreshToken } from "../../models/index.js";
import Admin from "../../models/admin.js";
import bcrypt from 'bcrypt';
import JwtService from "../../service/JwtService.js";
import {REFRESH_SECRET} from '../../config/index.js'
const registerController = {
  async register(req, res, next) {

    // validation
    const registerSchema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().min(5).max(30).required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
      repeat_password: Joi.ref("password"),
    });

    const { error } = registerSchema.validate(req.body);

    if (error) {
      return next(error);
    }

    //     // check if user is in the database already
    try {
      const exist = await Admin.exists({ email: req.body.email });
      if (exist) {
        return next(
          CustomErrorHandler.alreadyExist("This email is already taken.")
        );
      }
    } catch (err) {
      return next(err);
    }

    const {name,email} = req.body;

    // Hash Password
    const hashedPassword = await bcrypt.hash(req.body.password,10);


    // prepare the model
      const user = new Admin({
          name,
          email,
          password:hashedPassword
      })
    let access_token;
    let refresh_token;
      try{
          const result = await user.save();
          // console.log(result)
          // res.json({result})
          // Token 

         access_token = JwtService.sign({_id:result._id,role:result.role})
         refresh_token = JwtService.sign({_id:result._id,role:result.role},'1y',REFRESH_SECRET);

         // database whitelist
          await RefreshToken.create({token:refresh_token})
      }catch(err){
        console.log(err)
        return next('err' + err)
      }

    res.json({access_token:access_token,refresh_token:refresh_token});
  },
};

export default registerController;
