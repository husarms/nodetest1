var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('gallery/san-francisco', { title: 'San Francisco' });
    res.renderPjax('gallery/san-francisco', { title: 'San Francisco' });
});

module.exports = router;
