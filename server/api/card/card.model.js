'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CardSchema = new Schema({
  name: String,
  title: String,
  company: String,
  phone: {
      cell: Number,
      work: Number,
  },
  email: String,
  linkedin: String,
  site: String,
  notes: String

});

module.exports = mongoose.model('Card', CardSchema);
