import express from 'express';
import {SERVER_PORT,DB_URL} from './config/index.js';
import router from './routes/index.js';
import errorHandle from './middleware/errorHandling.js';
import mongoose from 'mongoose';
import passport from 'passport';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express();
import cors from 'cors'

import './routes/auth.js'
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use('/api',router);
// global variable
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
global.appRoot = path.resolve(__dirname);



app.use(passport.initialize());
app.use(passport.session());

function validateLogin(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}


app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173",
    failureRedirect: "/auth/error",
  })
);

app.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});
app.get("/dashboard", validateLogin, (req, res) => {
  res.redirect('http://localhost:5173/dashboard')
});


app.get("/auth/error", (req, res) => {
  res.send("Error occured");
});




// Database connection
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('DB connected...');
});
app.use(errorHandle);
app.listen(SERVER_PORT,() =>{
    console.log(`server is running on port ${SERVER_PORT}`)
})