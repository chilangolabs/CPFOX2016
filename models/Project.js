'use strict';

var mongoose = require('mongoose');
var app      = require('../index');

var ProjectSchema = {
  name: String,
  endOfCampain: Number,
  loc: String,
  helpsIn: [String],
  wishList: [String],
  mail: String,
  password: String
};

var Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
