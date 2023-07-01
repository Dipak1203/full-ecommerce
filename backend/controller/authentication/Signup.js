import GoogleStrategy from 'passport-google-oauth20';
import 'dotenv/config';
import passport from 'passport';
import { User } from '../../models/index.js';

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback"
    },
    async function(accessToken, refreshToken, profile, cb) {    
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

        return cb(null, user);
      } catch (error) {
        return cb(error);
      }
    }
  )
);
