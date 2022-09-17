import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.dotenv || 'development';

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error ('No .env file found');
}

export default {
    port: parseInt(process.env.PORT, 10),
}
