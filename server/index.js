import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "./src/config/db.js";
import { SERVER_PORT } from "./src/config/config.js";

const app = express();

// middleware

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = SERVER_PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
