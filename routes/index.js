var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'matt husar' });
  res.renderPjax('index', { locals: { title: 'matt husar'} });
});

module.exports = router;
