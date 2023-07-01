import passport from "passport";
import express from 'express';
import { CLIENT_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../config/index.js";
import { User } from "../models/index.js";
import GoogleStrategy from 'passport-google-oauth20'

const AuthRouter = express.Router();

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

AuthRouter.get("/dashboard", validateLogin, (req, res) => {
  res.send("Hello from dashboard");
});

AuthRouter.get("/auth/error", (req, res) => {
  res.send("Error occurred");
});

AuthRouter.get("/dashboard/logout", (req, res) => {
  req.logout((err) => {
    if (err) throw error;
    else {
      req.session.destroy();
      res.redirect("/");
    }
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          user = await User.create({
            googleId: profile.id,
            name: profile.displayName,
            email: profile._json.email,
            image: profile._json.picture
          });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

AuthRouter.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "Successful",
      user: req.user,
    });
  }
});

AuthRouter.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Failure",
  });
});

AuthRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default AuthRouter;
