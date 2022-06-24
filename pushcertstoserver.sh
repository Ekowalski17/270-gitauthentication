scp ./server.* elizabethdavis@elizabeth.node.cit270.com:/tmp


#ssh to your redis server
#Now you are on redis server
#We have to look at the Firewall (6379) is not open for the Network firewall.  
#It is also not accessible on the redis server.  
#You need to all some traffic.  Nodejs into redis, we can allow some traffic
#We are missing the operating firewall from Internet to Redis

#edit firewall rules by allowing ssh traffic through the firewall: 'sudo ufw allow ssh' (type this command)
# it will say: Rules updated: Rules updated (v6))

#Next, (type out command): 'sudo ufw allow 6379'

#check the status: (type out command)sudo ufw status.  
#It will say: inactive

#use this command to enable activatition: sudo ufw enable

#You will see "command may disrupt existing ssh connection. Proceed with operation (y |n)? 
#Be very carful.  It can delete your ssh connection.  Say "yes" to this for now
#it will say: Firewall is active and enabled on sysyem startup

#Now your next command is: (type this command) sudo nano /etc/redis/redis.conf *
#it will bring you to the nano 6.02 page

#look for bind.  It is usually CTl + w command
#You should find the black text that says "bind 127.0.0.1 ::1"
#type "bind and (the redis internal ip from the cloud)  It should be "10.128.0.2 ::01'

#change the protected mode to no.  You can use the Ctl+w to find the word protected

#Ctl+x to exit 

#configure 
#type sudo systemctl restart redis

#---Try connecting to the internal to connect to redis---
#type telnet 10.128.0.2 6379
#This is what you should see:
(#Trying 10.128.0.2... 
 #Connectied to 10.128.0.2.
 #Escape character is "^]".)

#---we are going to npm install your code
#now, get out of your redis server and go on to your nodejs server
#next, you want to get into your 270 authentication folder through your node js server
#type ls
#type 'cd 270-autenteication'
#type 'npm install' --this will install packages and allow you to run: npm start
#Last, type 'npm start'
#You should have it running

#Hope this helps