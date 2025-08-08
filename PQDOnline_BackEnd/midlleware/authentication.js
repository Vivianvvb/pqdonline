//to check the identidy of the user
import userMongo from "../model/model.js"
import responseMessage from "../constant/responseMessage.js"
import httpError from '../util/httpError.js'

export default async(request, response, next) => { //function in express to keep going to the next step
    try {
    const req = request
    let cookies = request.cookies //store the value of the cookies from request parameter
    let myToken
    
    if(cookies?.accessToken){ //?check if inside cookies has acessToken
      myToken = cookies.accessToken //store in myToken the access information
        console.log("We got the token")
    } else {
        return httpError(next, new Error(responseMessage.AUTH.UNAUTHENTICATED(), request, 401)) //WRITE STATUS CODE
    } 
//jwt = standard to share secure information - json web token (jwt)
    let decodedToken = helper.verifyToken(accessToken, config.secretKey)
    //file helper, function verifyToken (with the acess Token and the secret key in Config file) 
    const userToken = await userMongo.findById(decodedToken.userId) //findById to find user ID in token
    if(userToken){
        request.authenticatedUser = userToken
    } else {
        return httpError(next, new Error(responseMessage.AUTH.UNAUTHORIZED(), request, 401)) 
    }

    return next()
    
} catch (error) {
    return httpError(next, new Error(responseMessage.ERROR.INTERNAL_SERVER_ERROR(), request, 500)) //WRITE STATUS CODE
    }
}