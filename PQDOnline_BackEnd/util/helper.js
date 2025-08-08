import { parsePhoneNumber } from 'libphonenumber-js'
import { randomInt } from 'crypto'
import bcrypt from 'bcryptjs'

//functions in Object format

export default {
    generateToken: (payLoad, secret, expire) => {
        //payLoad (user info), secret key and expire information to create a token
        return jwt.sign(payLoad, secret, { expiresIn: expire })
        //it will responde with a token (signature), expire is an object
    },

    verifyToken: (givenToken, secret) => {
        //parameter the token given, secret
        return jwt.verify(givenToken, secret)
        //jwt verifies the token and the secret and return confirmation
    },

    parsePhone: (phoneNumber) => {
        try {
            //create var to get phoneNumber treated by parse library
            const myPhoneNumber = parsePhoneNumber(phoneNumber)
            //check if telephone exists 
            if (myPhoneNumber) {
                return {
                    //returning phone spread in 3 fields as data pattern of library 
                    isoCode: myPhoneNumber.country,
                    countryCode: myPhoneNumber.countryCallingCode,
                    phoneNumber: myPhoneNumber.formatInternational()
                }
            } else {
                return {
                    isoCode: null,
                    countryCode: null,
                    phoneNumber: null
                    //if phone not exist, return null to the fields
                }
            }
        } catch (error) {
            return {
                isoCode: null,
                countryCode: null,
                phoneNumber: null
            }
        }
    },

    generateOtp: (length) => {
        const minimum = Math.pow(10, length - 1) //check minimum using elevation
        const maximum = Math.pow(10, length) - 1 //checking maximum number
        return randomInt(minimum, maximum).toString()
    },

    //function to encrypt password #password
    hashPassword: (password) => {
        return bcrypt.hash(password, 10)
    },

    //two fields to check new password 
    comparePassword: (newPassword1, newPassword2) => {
        return bcrypt.compare(newPassword1, newPassword2) //compare if both are the same
    },

}