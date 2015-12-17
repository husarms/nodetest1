var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('about-me', { title: 'About Me' });
    res.renderPjax('about-me', { title: 'About Me' });
});

module.exports = router;
