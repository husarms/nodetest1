var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('gallery/los-angeles', { title: 'Los Angeles' });
});

module.exports = router;
