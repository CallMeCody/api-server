'use strict';

const express = require('express');
const petSchema = require('../models/pet.js');
const Pet = require('../models/data-collection-class.js');
const items = new Pet(petSchema);

const petRoute = express.Router();

petRoute.get('/pet', getPet);
petRoute.get('/pet/:id', getOnePet);
petRoute.post('/pet', createPet);
petRoute.put('/pet/:id', updatePet);
petRoute.delete('/pet/:id', deletePet);

async function getPet(req, res) {
  let all = await items.get();
  res.status(200).json(all);
}

async function getOnePet(req, res) {
  let id = req.params.id;
  let pet = await items.get(id);
  res.status(200).json(pet);
}

async function createPet(req, res) {
  let obj = req.body;
  let newPet = await items.create(obj)
  res.status(201).json(newPet);
}

async function updatePet(req, res) {
  let id = req.params.id;
  let content = req.body;
  let updated = await items.update(id, content);
  res.status(200).send(updated);
}

async function deletePet(req,res) {
  let id = req.params.id;
  let deleted = await items.delete(id);
  res.status(204).send('Pet deleted');
}

module.exports = petRoute;