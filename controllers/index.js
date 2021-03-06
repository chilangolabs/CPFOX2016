'use strict';

var Project = require('../models/Project');

module.exports = function(router) {

  router.get('/', function(req, res, next) {
    Project.find().sort({hits: 'desc'}).limit(3)
      .exec(function(err, docs) {
        if (err) {return next(err);}
        console.log('Staff Picks', docs);
        res.locals.staffPicks = docs;
        res.render('index');
      });
  });

};
