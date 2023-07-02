import Joi from "joi";
import bcrypt from "bcrypt";
import Admin from '../../models/admin.js'
import CustomErrorHandler from "../../service/CustomErrorHandler.js";
import JwtService from "../../service/JwtService.js";
import { REFRESH_SECRET } from "../../config/index.js";
import { RefreshToken } from "../../models/index.js";
const loginController = {
  async login(req, res, next) {
    const loginSchema = Joi.object({
      email: Joi.string().min(5).max(30).required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    });

    const { error } = loginSchema.validate(req.body);

    if (error) {
      return next(error);
    }

    // if user exist or not
    try {
      const user = await Admin.findOne({ email: req.body.email });
      if (!user) {
        return next(CustomErrorHandler.wrongCredentials());
      }

      // compare the password
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) {
        return next(CustomErrorHandler.wrongCredentials());
      }

      // Toekn
      const access_token = JwtService.sign({ _id: user._id, role: user.role });
      const refresh_token = JwtService.sign(
        { _id: user._id, role: user.role },
        "1y",
        REFRESH_SECRET
      );
      // database whitelist
      await RefreshToken.create({ token: refresh_token });
      res.json({ access_token, refresh_token });
      // console.log(access_token);
    } catch (error) {
      return next(error);
    }
  },

  // logout

  async logout(req, res, next) {
    // validation
    // validation
    const refreshSchema = Joi.object({
      refresh_token: Joi.string().required(),
    });
    const { error } = refreshSchema.validate(req.body);

    if (error) {
      return next(error);
    }
    try {
      await RefreshToken.deleteOne({ token: req.body.refresh_token });
    } catch (error) {
      return next(new Error("Something went wrong in the database"));
    }
    res.json({ status: 1 });
  },
};

export default loginController;
