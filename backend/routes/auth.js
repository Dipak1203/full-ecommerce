import GoogleStrategy from "passport-google-oauth20";
import passport from "passport";
import "dotenv/config";
import User from "../models/user.js";
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {

      // User.findOrCreate({ googleId: profile.id,name:profile.displayName,email:profile.email }, function (err, user) {
      //   return cb(err, user);
      // }).save()
      await User.findOne({
        googleId: profile.id
      }) || await User.create({
        googleId: profile.id,
        name: profile.displayName,
        email: profile._json.email,
        image: profile._json.picture
      })
      console.log(profile);
      return cb(null, profile);
      //   });
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (user, cb) {
  cb(null, user);
});