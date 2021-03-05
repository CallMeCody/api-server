'use strict';

const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
  name: { type: String, required: true},
  age: { type: Number, required: true}
});

const personModel = mongoose.model('person', personSchema);

module.exports = personModel;