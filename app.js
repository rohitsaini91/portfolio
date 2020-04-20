const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const app = express();

//user parser
app.use(bodyParser.json());


//Import routes
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);

//ROUTES
app.get('/',(req,res) => { 
    res.send('I am awesome!');
});




//Connect to database
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true, useUnifiedTopology: true},() =>{
    console.log('connected to db...');
});


//Listening to server
app.listen(3000);