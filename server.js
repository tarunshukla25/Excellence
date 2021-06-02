const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const config = require('./config/local');
const routes = require('./routes/index.route')

const app = express();

mongoose.connect(config.mongo.url, config.mongo.options).then( () => {
    console.log('Connected to database');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    
    app.use('/', routes);
    app.listen(config.port, () => {
        console.log(`app is running on port ${config.port}`);
    })
}).catch((err) => {
    console.log('Fail to connect with database', err);
});