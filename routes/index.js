var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.renderPjax('index', { title: 'matt husar' });
});

module.exports = router;
