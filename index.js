'use strict';

const mongoose = require('mongoose');
const server = require('./src/server.js')
const PORT = process.env.PORT || 3000;

const MONGODB_URI = 'mongodb://localhost:27017/api-server';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(MONGODB_URI, options)
  .then( () => {
    server.start(PORT)
  })
  .catch(err => console.error(err));