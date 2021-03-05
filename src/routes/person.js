'use strict';

const express = require('express');
const personSchema = require('../models/person.js');
const Person = require('../models/data-collection-class.js');
const items = new Person(personSchema);

const personRoute = express.Router();

personRoute.get('/person', getPerson);
personRoute.get('/person/:id', getOnePerson);
personRoute.post('/person', createPerson);
personRoute.put('/person/:id', updatePerson);
personRoute.delete('/person/:id', deletePerson);

async function getPerson(req, res) {
  let all = await items.read();
  res.status(200).json(all);
}

async function getOnePerson(req, res) {
  let id = req.params.id;
  let person = await items.read(id);
  res.status(200).json(person);
}

async function createPerson(req, res) {
  let obj = req.body;
  let newPerson = await items.create(obj)
  res.status(201).json(newPerson);
}

async function updatePerson(req, res) {
  let id = req.params.id;
  let content = req.body;
  let updated = await items.update(id, content);
  res.status(200).send(updated);
}

async function deletePerson(req,res) {
  let id = req.params.id;
  let deleted = await items.delete(id);
  res.status(204).send('Person deleted');
}

module.exports = personRoute;