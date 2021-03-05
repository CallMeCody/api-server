'use strict';

// server files
const server = require('../src/server.js');
const petModel = require('../src/models/pet.js');
const personModel = require('../src/models/person.js');
const DataCollection = require('../src/models/data-collection-class');
const petRoute = new DataCollection(petModel);
const personRoute = new DataCollection(personModel);

// testing dependencies
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const { response } = require('express');
const mockRequest = supertest(server);

describe('API SERVER', () => {
  it('should return a 404 if no route found', () => {
    mockRequest.get('/not-a-route')
      .then(results => {
        expect(results.status).toBe(404);
      });
  })

  it('should return a 500 if the server is broken', async () => {
    await mockRequest.get('/not-a-route')
      .then(results => {
        expect(results.status).toBe(500);
      });
  })

  it('can create a new record in the db', async () => {
    let testPerson = { name: "cody", age: 26 }
    let response = await mockRequest.post('/person').send(testPerson)
    expect(response.status).toBe(201);
    expect(response.body._id).toBeDefined();
  })

  it('can delete a record from the db', async () => {
    await mockRequest.delete('/person/1')
      .then(response => {
        expect(response.status).toBe(204);
        expect(response.body).toBeFalsy();
      })
  })

  it('can update a record from the db', () => {

  })

  it('can retrieve a single record from the db', () => {

  })

  it('can retrieve all records from the db', () => {

  })
})