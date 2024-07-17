const express = require('express');
const app = express();
const indexrouter = require('./routes/index');
const bodyParser = require('body-parser');
const path = require("path");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.static(__dirname + '/public'));
app.use("/", indexrouter);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log("connected");

});


