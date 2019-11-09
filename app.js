const express = require('express');
const bodyParser = require('body-parser');


const appRoutes = require('./routes/app');
const articleRoutes = require('./routes/article');
const userRoutes = require('./routes/user');

const pg = require("pg");

const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'sample', 
    api_key: '163284578578769', 
    api_secret: '4BX6aBRvCu0naiKjrgyfcrWYbAM' 
  });

// const userRoutes = require('./routes/user');

const app = express();

const path = require('path');


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use('/', appRoutes);

app.use('/v1', articleRoutes);

app.use('/v1', userRoutes);






module.exports = app;