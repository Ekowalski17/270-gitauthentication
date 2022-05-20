const express = require('express'); //import the express library
const port = 3000;//make a variable.  Make a constant
const app = express(); //using express library to get application module
const md5 = require ('md5'); //using express library to get application module
const bodyParser = require('body-parser'); //import body-parser
const {createClient} = require('redis');
const { response } = require('express');
const redisClient = createClient(//this creates a connection to the redis database
{
    socket:{ //if there is a field after, you need a comma
        port:6379,
        host:"127.0.0.1",
    }
}
);//this creates a connection to the redis database
//you can not post json without a bodyParser

app.use(bodyParser.json());//add body parser middleware and use the middleware call it before  
//anything else happens on each request


app.listen(port, async()=>{
    await redisClient.connect();
    console.log("Listening on port: "+port);
});
app.post('/signup', signup);

const signip(request, response)=> {
    
    hmset(userName,password);
}


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
