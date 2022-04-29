const express = require('express');//importing the library

const app = express();//using the library

app.listen(3000,()=>{console.log("listening.....")}); //listen

app.get('/', (request, response)=>{response.send("hello")}); //respond