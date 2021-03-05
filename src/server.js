'use strict';
// if applicable, 1st party dependencies

// 3rd party dependencies
const express = require('express');
const app = express();

// internal modules
const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const petRoutes = require('./routes/pet.js');
const personRoutes = require('./routes/person.js');

app.use(express.json());

app.use(logger);

// modular routes
app.use(petRoutes);
app.use(personRoutes);

// run this for everything
app.use('*', notFound);
// error handling middleware is always at the bottom of the mw chain
app.use(errors);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`listening on ${port}`);
    })
  }
}