'use strict';

var paypal = require('paypal-rest-sdk');

module.exports = function(router) {

  router.get('/', function(req, res, next) {
    var monto = req.query.monto || 100;

    if (!monto) {
      res.sendStatus(400); // TODO
    }

    paypal.configure({
      mode: req.app.kraken.get('paypal:mode'),
      client_id: req.app.kraken.get('paypal:clientId'),
      client_secret: req.app.kraken.get('paypal:clientSecret')
    });

    var paymentObject = {
      'intent': 'sale',
      'payer': {
        'payment_method': 'paypal'
      },
      'redirect_urls': {
        'return_url': 'http://proceso.premiorazondeser.mx/', // TODO
        'cancel_url': 'http://cineguru.com.mx' // TODO
      },
      'transactions': [{
        'item_list': {
          'items': [{
            'name': 'Donativo', //TODO
            'sku': Date.now().toString(), //TODO
            'price': monto, //TODO
            'currency': 'MXN', //TODO
            'quantity': 1 //TODO
          }]
        },
        'amount': {
          'currency': 'MXN', //TODO
          'total': monto //TODO
        },
        'description': 'Un donativo para .....' //TODO
      }]
    };

    paypal.payment.create(paymentObject, function(err, payment) {
      if (err) {
        throw err; //TODO
      }

      console.log(payment);
      res.redirect(payment.links[1].href);
    });
  });
};
