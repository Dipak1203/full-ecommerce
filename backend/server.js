import express from 'express';
import { SERVER_PORT, DB_URL,CLIENT_URL,SESSION_SECRET} from './config/index.js';
import router from './routes/index.js';
import errorHandle from './middleware/errorHandling.js';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express();
import cors from 'cors';
import session from 'express-session';
import './routes/auth.js';
import passport from 'passport';
import './controller/authentication/Signup.js';
import AuthRouter from './routes/auth.js';

const appRoot = dirname(fileURLToPath(import.meta.url));

const corsOptions = {
  origin: CLIENT_URL,
  method:"GET,POST,PUT,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', router);
app.use('/', AuthRouter);

// global variable
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
global.appRoot = path.resolve(__dirname);

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


app.listen(SERVER_PORT, () => {
  console.log(`server is running on port ${SERVER_PORT}`);
});

export default appRoot;