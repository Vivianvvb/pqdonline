import mongoose from "mongoose";

export default {
    connect: async () => {
        try {
            await mongoose.connect(config.DATABASE_URL)
            return mongoose.connection
        } catch (error) {
            return new Error("Database connection Failed")
        }
    }
}