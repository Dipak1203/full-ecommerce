import passport from "passport";
import express from 'express';


const AuthRouter = express.Router();

AuthRouter.use(passport.initialize());
AuthRouter.use(passport.session());

function validateLogin(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}


AuthRouter.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

AuthRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173",
    failureRedirect: "/auth/error",
  })
);

AuthRouter.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});
AuthRouter.get("/", validateLogin, (req, res) => {
  res.redirect('http://localhost:5173/')
});


AuthRouter.get("/auth/error", (req, res) => {
  res.send("Error occured");
});






export default AuthRouter;