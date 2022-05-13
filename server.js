const express = require('express'); //import the express library
const bodyparser = require('body-parser'); //import body-parser
const port = 3000;
const app = express();
const md5 = require ('md5'); //using express library to get application module
const redis = require('redis');

const redisClient =redis.createClient();

app.use(bodyparser.json());//add body parser middleware and use the middleware (call it before 
//anything else happens on each request)

//listen
app.listen(port, ()=>{
    console.log("Listening on port: "+port)
});

//validate password function
const  validatePassword = (request,response) => {
    if(request.body.userName == "cupcakes123@gmail.com" && request.body.password == "e1747946367efef68441039c3cbc9ea7"){
        response.status(200);// 200 means okay
        response.send("Welcome")
    } else {
        response.status(401);
        response.send("Unauthorized");//401 means unauthorized
    }
    const hashedPassword = md5(request.body.password);
    redisClient.hmGet("passwords", request.body.userName);
    const loginRequest = request.body;

}

//respond
const validatePassword = async (request, response)=>{}
app.get('/',(request,response)=>{response.send("hello")});
app.post('/login',validatePassword);


 