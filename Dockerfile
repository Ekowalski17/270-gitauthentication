#You will need to download dockerfile (it should look like a whale)
#You will need to create a file "Dockerfile." Yes, the letter 'D' should
#be capitalized.  Once you type it out, a whale symbol should appear next
#to the name of the file that you just created

#Now copy and paste this code here on out:
#FROM is what language we want to start.  

FROM node

#This tells the container to start in the directory
WORKDIR /app

#We are copying the json file first so that 
#there isn't a conflict witht he node_modules directory
COPY package.json ./

RUN npm install

COPY . ./

#This is the last command we need to start the container/server
CMD npm start

#run the command on terminal:  "docker build . -t cit270" 
#you will also make a script called build.sh
#in the build.sh write out "docker build . -t cit270"

#type out docker images (to build your image)
#docker run -p 433:433 cit270