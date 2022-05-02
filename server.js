const express = require('express');//importing the library
const port = 3000
const app = express();//using the library

app.listen(port,()=>{console.log("listening....." + port)}); //listen

app.get('/', (request, response)=>{response.send("hello")}); //respond