const express = require('express'); //import the express library
const bodyparser = require('body-parser'); //import body-parser
const port = 3000;
const app = express(); //using express library to get application module

app.use(bodyparser.json());//add body parser middleware

//listen
app.listen(port, ()=>{
    console.log("Listening on port: "+port)
});


//validate password function
const  validatePassword = (request,response) => {
    if(request.body.userName == "cupcakes123@gmail.com" && request.body.password == "Cupcakesarebadforyou_22$"){
        response.status(200);
        response.send("Welcome")
    } else {
        response.status(401);
        response.send("Invalid userName or password");
    }
}
//respond
app.get('/',(request,response)=>{response.send("hello")});
app.post('/login',validatePassword);









