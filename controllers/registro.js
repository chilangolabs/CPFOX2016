'use strict';

var Donator = require('../models/Donator');
var crypto   = require('crypto');

module.exports = function(router) {

  router.route('/')
    .get(function(req, res, next) {
        console.log(res.locals.errors);
        res.render('registro');
      })
    .post(function(req, res, next) {
      if (
        [req.body.mail, req.body.password].every(v => !v)
      ) {
        req.flash('error', 'Email y password no puede ir vacío');
        return res.redirect('back');
      }
      var donator = {
        name: req.body.name,
        age: req.body.age,
        loc: req.body.localidad,
        mail: req.body.mail,
        password: req.body.pass
      };
      var cipher = crypto.createCipher('aes192', 'a password');
      var pass = cipher.update(donator.password, 'utf8', 'hex');
      pass += cipher.final('hex');
      donator.password = pass;
      var user = new Donator(donator);
      user.save(function(err) {
        req.session.user = user._id;
        res.redirect('/proyectos');
      });
    });

};
