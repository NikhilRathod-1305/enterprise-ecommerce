import dotenv from 'dotenv';

// Load .env and override any existing env vars to avoid stale/blank values
dotenv.config({ override: true });

if (!process.env.MONGO_URI) {
    console.error('MONGO_URI is missing. Check backend/.env or your environment variables.');
}

export const env = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
    JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN || '7d'
};