var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.renderPjax('gallery/las-vegas', { title: 'Gallery - Las Vegas' });
});

module.exports = router;
