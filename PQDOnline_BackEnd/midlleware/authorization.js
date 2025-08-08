import responseMessage from "../constant/responseMessage"


export default async(category) => {
 return (request, responde, next) => {
    try {
    const userAuth = request.authenticatedUser //gettinf the user data
    if(!category.includes(userAuth.category)){ //checking if the category that I specified is included in the user
        return new Error(responseMessage.AUTH.FORBIDDEN) //if not, allowance error
    } next() //if ok, go the next step
 } catch (error) {
    return new Error(responseMessage.ERROR.INTERNAL_SERVER_ERROR)
 }
 
}
}