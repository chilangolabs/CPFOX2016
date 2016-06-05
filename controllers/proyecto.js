'use strict';

var Project = require('../models/Project');

module.exports = function(router) {

  router.route('/').get(function(req, res, next) {
    res.render('proyecto');
  });
  router.get('/:id', function(req, res, next) {
    // Project.findOne({_id: req.params.id})
    //   .exec(function(err, doc) {
    //     if (err) {return next(err);}
    //     console.log('Staff Picks', doc);
    //     res.locals.project = doc;
    //     res.send('index');
    //   });
  });

};
