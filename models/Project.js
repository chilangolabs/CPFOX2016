'use strict';

var mongoose = require('mongoose');
var app      = require('../index');

app.on('start', function() {
  mongoose.connect(app.kraken.get('mongo'));
});

var ProjectSchema = {
  name: String,
  endOfCampain: Date,
  loc: String,
  mail: String,
  desc: String,
  materials: String,
  volunteers: String,
  economic: String,
  image: String
};

var Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
