import express from "express";
import { registerController,loginController,userController,refreshController,productController} from "../controller/index.js";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";
const router = express.Router();

// for register
router.post("/register", registerController.register);

// for login
router.post("/login", loginController.login);

// who am I 
router.get("/me",auth,userController.me)

// refresh token
router.post("/refresh",refreshController.refresh)

// logout 
router.post("/logout",auth,loginController.logout)


// products
router.post('/products/cart-items', productController.getProducts);

router.post('/products',[auth,admin],productController.store);
router.put('/products/:id', [auth, admin], productController.update);
router.delete('/products/:id', [auth, admin], productController.destroy);
router.get('/products', productController.index);
router.get('/products/:id', productController.show);


export default router;
