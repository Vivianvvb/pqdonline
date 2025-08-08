import express from 'express'

const app = express() //create express aplication inside node js
app.use(express.json()) //to use information in json from frontend

const onListening = () => {
    console.log("Server is running on port 5000")
    
} 

app.listen(5000, onListening) //command to listen (port, function it is calling)
