const express = require('express'); //import the express library
const https =require('https')
const port = 3000;//make a variable.  Make a constant
const app = express(); //using express library to get application module
const md5 = require ('md5'); //using express library to get application module
const bodyParser = require('body-parser'); //import body-parser
const {createClient} = require('redis');
const { response } = require('express');
const  fs = require('fs');
const redisClient = createClient(//this creates a connection to the redis database
{url: 'redis://@35.226.196.58:6379'}
);//this creates a connection to the redis database
//you can not post json without a bodyParser

app.use(bodyParser.json());//add body parser middleware and use the middleware call it before  
//anything else happens on each request


// https.createServer({
//     key: fs.readFileSync('server.key'),
//     cert: fs.readFileSync('server.cert'),
//     passphrase: 'P@ssw0rd'

// }, app).listen(port, async () => {
//     console.log("Listening on port: " +port);
//     await redisClient.connect(); //creating a TCP socket with Redis
// })

app.listen(port,async()=>{
    await redisClient.connect();
    console.log("listening on port: ", port);
})

//validate password function
const  validatePassword = async(request,response) => {
    const requestHashedPassword = md5(request.body.password);//get the password from the body and has it
    const redisHashedPassword = await redisClient.hmGet('passwords', request.body.userName); //read password from redis
    //read password from redis
    const loginRequest = request.body;
    console.log("Request Body", JSON.stringify(request.body));
    //search database for username, nad retrieve current password

    //compare teh hashed version of the password that was sent with the hashed version from the database
    if (loginRequest.userName =="cupcakes123@gmail.com" && requestHashedPassword==redisHashedPassword){
        response.status(200)//200 means okay
        response.send("Welcome")
    }else{
        response.status(401)//401 means unauthorized
        response.send("Unauthorized");
    }
};

app.get('/',(request,response)=>{
    response.send("Hello Elizabeth!");
})

app.post('/login', validatePassword);


const signup = async(request,response) => {
    const requestHashedPassword = md5(request.body.password);//get the password from the body and has it
    const username = request.body.userName;
    await redisClient.hSet ('passwords', username, requestHashedPassword);
    response.status(200)
    response.send("Successful");
};

app.post('/signup', signup);