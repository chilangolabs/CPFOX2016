'use strict';

module.exports = function(router) {

  router.get('/:view', function(req, res) {
    res.render(req.params.view);
  });

};
