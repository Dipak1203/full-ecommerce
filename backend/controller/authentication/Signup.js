import GoogleStrategy from 'passport-google-oauth20'
import 'dotenv/config';
import passport from 'passport';
const {GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET} = process.env
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile)
    return (cb,profile);
  }
));