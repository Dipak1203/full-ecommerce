import express from 'express';
import {SERVER_PORT,DB_URL} from './config/index.js';
import router from './routes/index.js';
import errorHandle from './middleware/errorHandling.js';
import mongoose from 'mongoose';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express();
import cors from 'cors'
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api',router);
app.use(cors())

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
app.listen(SERVER_PORT,() =>{
    console.log(`server is running on port ${SERVER_PORT}`)
})