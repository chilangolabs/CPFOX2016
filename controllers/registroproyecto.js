'use strict';

var Project = require('../models/Project');
var crypto   = require('crypto');

module.exports = function(router) {

  router.route('/')
    .get(function(req, res, next) {
      res.render('registroproyecto');
    })
    .post(function(req, res, next) {
      console.log('#############', req.files);
      req.body.image = req.files.image.path.split('/').pop();
      var proyecto = new Project(req.body);

      proyecto.save(function(error) {
        if (error) {return next(error);}
        res.redirect('/proyectos');
      });
    });
};
