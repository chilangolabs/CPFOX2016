'use strict';

var Project = require('../models/Project');

module.exports = function(router) {

  router.get('/', function(req, res, next) {
    Project.find().limit(10)
      .exec(function(err, docs) {
        if (err) {return next(err);}
        console.log('Staff Picks', docs);
        res.locals.projects = docs;
        res.render('proyectos');
      });
  });

};
