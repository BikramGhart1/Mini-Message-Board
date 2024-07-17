#Mini message board
This project runs in localhost and listens to port 300,
this project contains a form which allows a user to enter their name and message and display in home page


![Screenshot 2024-07-17 170038](https://github.com/user-attachments/assets/4d3f7e6e-b759-4352-8d24-bec3fb09cb4b)
![Screenshot 2024-07-17 170131](https://github.com/user-attachments/assets/df539485-6a7b-45ad-9041-a98608a5e842)
![Screenshot 2024-07-17 170204](https://github.com/user-attachments/assets/6863a274-dbeb-4e56-8a4a-cb68044d6e31)

#How this works and What's happening
##view files
There are two ejs files that need to be rendered according to the requested routes
so for these two ejs files we have used ejs view engine and they contain in views folder,

###index.ejs
 our landing page will be index.ejs where data will be passed from another file.
 in this landing page using ejs we will loop the array of message and display them in loop, simple.

###form.ejs
 our form page will be form.ejs where a form will be filled and submit 
 while submitting this form we will use method "POST" and action "/new" which will be triggering "/new" route
 Also to access the value of submitted input fealds we will assign each input a name and lets talk how to access these values in "/new" route file which is below

##route files
And there are two routes, "/" and "/new"
###indexRouter.js
for these routes we have a indexRouter.js file which will be handling the routes.

first when "/" is requested we render index.ejs and pass the messages which is being stored in this file. we have mentioned above in index.ejs file how to access
these passed values using ejs

now "/new" will be having two methods get and post, when get is performed we just render form.ejs file and let user fill that form

when post method is requested and sent with filled values we will access them using req.body.inputFieldName and push them to array of messages
for this to happen we must use body-parser as middleware in our main server.js file, at last we are using redirect method with path "/" to direct the user to landing page

##our main server file
###server.js
server.js is responsible listening to the port and we have used quite a few middlewares in this file which have been commented 

#Made using
1. Node js
2. Express js

#clone the repositoy 
to clone the repository 
1. Make a folder where you want to clone the repo
2. open the git bash
```bash
   cd "your directory"
   git clone "https://github.com/BikramGhart1/Mini-Message-Board.git"
```
3. Install dependencies
