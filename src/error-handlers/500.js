'use strict';

module.exports = (err, req, res, next) => {
  res.status(500).send({status:500, msg: 'server is borked for some reason'});
}