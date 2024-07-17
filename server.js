const express = require('express');
const app = express();
const indexrouter = require('./routes/index');
const bodyParser = require('body-parser');
const path = require("path");

//to use ejs files
app.set('view engine', 'ejs');

//for accessing input fields
app.use(bodyParser.urlencoded({ extended: true }))
//using our route file
app.use("/", indexrouter);
//to get json values
app.use(express.json());
//for connecting css files
app.use(express.static(path.join(__dirname, 'public')));


//listen to port 3000
app.listen(3000, () => {
    console.log("connected");

});


