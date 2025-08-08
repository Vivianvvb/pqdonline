import dotenv from "dotenv"
import {RateLimiterMongo} from 'rate-limiter-flexible'

dotenv.config()
const config = {
    PORT: process.env.PORT, //to get and process info from the file .env
    DATABASE_URL: process.env.DATABASE_URL,
    SECURITY: {
        RATE_LIMIT_WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10), //time in miliseconds
        RATE_LIMIT_MAX: parseInt(process.env.RATE_LIMIT_MAX, 10), //times he can access
    },
}
