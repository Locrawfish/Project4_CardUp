'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  title: String,
  company: String,
  phone: {
      cell: Number,
      work: Number,
  },
  email: String,
  linkedin: String,
  site: String
});

module.exports = mongoose.model('Thing', ThingSchema);
