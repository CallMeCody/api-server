'use strict';

const { models } = require("mongoose");

class Collection {
  constructor(models) {
    this.model = models;
  }

  read(_id) {
    if(_id) {
      return this.model.findOne({ _id })
    } else {
      return this.model.find({});
    }
  }

  create(record) {
    let newRecord = new this.model(record);
    return newRecord.save();
  }

  update(_id, record) {
    return this.model.findByIdAndUpdate(_id, record, { new: true }) // new: true is required to get back the newly updated thing
  }

  delete(_id) {
    return this.model.findByIdAndDelete(_id);
  }
}

module.exports = Collection;