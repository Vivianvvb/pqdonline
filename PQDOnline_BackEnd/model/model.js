import mongoose, { Mongoose } from "mongoose" //modelo for database
import {userRole} from '../constant/application.js'

const dataModel = new mongoose.Schema({ //model object for login database
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 72,
        minlength: 6, 
    },
    password: {
        type: String,
        required: true,
        maxlength: 12,
        minlength: 6,
    },
    fullName: {
        type: String,
        required: true,
        maxlength: 72,
        minlength: 6,
    },
    telephone: {
        id: false, //udes for identification signature
        isoCode: {
            type: String,
            required: true,
        },
        countryCode: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        }
    },
    numberJump: {
        type: String,
        required: true,
        maxlength: 5,
        minlength: 1,
    },
    category: {
        type: String,
        required: true,
        enum: userRole, //enum fix the value of a selectable data, entered by a user
        default: userRole.CATEGORY_Ai, //default value in case they don't select any
    },
    consent: {
        type: Boolean,
        required: true,
    }

})

export default mongoose.model("userMongo", dataModel)  //object name, function that is calling
