var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('gallery/japan', { title: 'Japan' });
    res.renderPjax('gallery/japan', { title: 'Japan' });
});

module.exports = router;
