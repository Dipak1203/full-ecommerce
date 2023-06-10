import bcrypt from 'bcrypt';
import adminLoginModel from '../../model/AuthModel.js';
import jwt from 'jsonwebtoken'
import {MY_SECRET} from '../../config/config.js'
const AuthController = {
  async Login(req, res) {
    const { username, password } = req.body;

    try {
      if (!username || !password) {
        res.status(400).json({ message: "please fill the form" });
        return; // Return here to exit the function
      }
      const checkUser = await adminLoginModel.findOne({ username: username });
      if (checkUser) {
        const bcryptPassword = await bcrypt.compare(password, checkUser.password);
        if (bcryptPassword) {
          const token = jwt.sign({id:checkUser._id},MY_SECRET);
        //   console.log(token)
          res.json({token});
        } else {
          res.status(401).json({ message: "password does not match" });
        }
      } else {
        res.status(401).json({ message: "username not found" });
      }
    } catch (error) {
      res.status(501).json({ message: "internal server error", error });
    }
  },
};

export default AuthController;
