var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.renderPjax('portfolio', { title: 'Portfolio' });
});

module.exports = router;
