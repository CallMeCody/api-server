'use strict';

module.exports = (req, res, next) => {
  res.status(404).json({status:400, msg: 'not found'});
  next();
}