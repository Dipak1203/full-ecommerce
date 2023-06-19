import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "./src/config/db.js";
import { SERVER_PORT } from "./src/config/config.js";
import AuthRouter from "./src/routes/auth/AuthRouter.js";
import categoryRouter from "./src/routes/admin/Products/Category.js";
import branchRouter from "./src/routes/admin/Products/Branch.js";
import sizeRouter from "./src/routes/admin/Products/Size.js";
import productRouter from "./src/routes/admin/Products/ProductRouter.js";

const app = express();

// middleware

app.use(cors({
  origin: 'http://127.0.0.1:5173',
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/login", AuthRouter);
app.use("/product/category", categoryRouter);
app.use("/product/branch", branchRouter);
app.use("/product/size", sizeRouter);
app.use("/product", productRouter);

const PORT = SERVER_PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
