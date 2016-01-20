var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.renderPjax('about-this-site', { title: 'About This Site' });
});

module.exports = router;
