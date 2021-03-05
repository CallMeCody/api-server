'use strict';

const { it, expect } = require('@jest/globals');
const logger = require('../src/middleware/logger.js');

logger = require('../src/middleware/logger.js');

describe('LOGGER MW', () => {
  let req = {};
  let res = {};
  let next = jest.fn();
  let spy;

  beforeEach(() => {
    spy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('should log some info about the req', () => {
    logger(req, res, next);
    expect(spy).toHaveBeenCalled();
  });

  it('should move to the next mw in the chanin', () => {
    logger(req,res,next);
    expect(next).toHaveBeenCalled();
  });
});