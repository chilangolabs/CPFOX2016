'use strict';

var Donator = require('../models/Donator');
var crypto   = require('crypto');

module.exports = function(router) {

  router.route('/')
    .get(function(req, res, next) {
      res.render('registroproyecto');
    })
    .post(function(req, res, next) {
      res.redirect('/proyectos');
    });
};
