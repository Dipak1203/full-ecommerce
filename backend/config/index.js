import dotenv from 'dotenv';

dotenv.config();

export const {
    SERVER_PORT,
    DEBUG_MODE,
    DB_URL,
    JWT_SECRET,
    REFRESH_SECRET,
} = process.env