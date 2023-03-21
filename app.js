const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);// middleware

//ROUTES(GET,POST,PUT,DELETE,etc.)

app.get('/', (req,res)=>{
    res.send('Home');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION).then(() => {
    console.log("Conected")
}).catch(err => console.log(err));


//Listen to the server
app.listen(3000);

