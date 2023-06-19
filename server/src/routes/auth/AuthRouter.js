import express from 'express';
import AuthController from '../../controller/auth/AuthController.js';

const AuthRouter = express.Router();

AuthRouter.post("/AuthAdminActivity",(req,res) =>{
    AuthController.Login(req,res);
});
AuthRouter.post("/logout",(req,res) =>{
    AuthController.logout(req,res);
})
export default AuthRouter;