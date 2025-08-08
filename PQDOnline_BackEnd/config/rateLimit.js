import {RateLimiterMongo} from 'rate-limiter-flexible'
import config from './config.js'
//limit how much times que can access in a period of time
export let RateLimiterMongo = null
export const initRateLimiter = (mongooseConnection) => {
    RateLimiterMongo = new RateLimiterMongo({
        storeClient: mongooseConnection,
        points: config.SECURITY.RATE_LIMIT_MAX,
        duration: config.SECURITY.RATE_LIMIT_WINDOW_MS/10000,
    })
}

