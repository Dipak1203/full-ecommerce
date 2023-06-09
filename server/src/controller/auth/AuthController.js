import bcrypt from 'bcrypt';
import adminLoginModel from '../../model/AuthModel.js';
const AuthController = {
    async Login(req,res){

        const {username,password} = req.body;

        try {
            const hashPassword = await bcrypt.hash(password,10);
            const document = await adminLoginModel.create({
                username:username,
                password:hashPassword
            });
            if(document){
                res.status(201).json({message:'login success',document})
            }
        } catch (error) {
            
        }
    }
}

export default AuthController;