var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('gallery/las-vegas', { title: 'Las Vegas' });
    //res.renderPjax('gallery/las-vegas', { locals: { title: 'Las Vegas'} });
});

module.exports = router;
