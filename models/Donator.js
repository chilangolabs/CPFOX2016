'use strict';

var mongoose = require('mongoose');
var app      = require('../index');

var DonatorSchema = {
  name: String,
  age: Number,
  loc: String,
  helpsIn: [String],
  mail: {type: String, unique: true},
  password: String
};

var Donator = mongoose.model('Donator', DonatorSchema);

module.exports = Donator;
