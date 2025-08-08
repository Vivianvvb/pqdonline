import Joi, { object } from 'joi' //Library for validation
import {userRole} from '../constant/application.js'

//form body for validation Sign up 
export const SignUpBody = Joi.object({
    email: Joi.string().email().required(),
    fullName: Joi.string().required(),
    telephone: Joi.string().required(),
    password: Joi.string().min(8).max(12).required(),
    numberJumps: Joi.string().required(),
    category: Joi.string().valid(...Object.values(userRole)).required(),
    consent: Joi.boolean().required(),
})
//form body for validation Sign In
export const SignInBody = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(12).required(),
})

//validate Schema for Sign up / in
export const validateJoiSchema = (schema, value) => { //schema are the forms above 
         //value comes from the front end, info to validate from the user
    const result = schema.validate(value) //function to validate data from that forms
    return{ //return 2 options: ok = value, not ok = error
        value: result.value,
        error: result.error,
    }
}