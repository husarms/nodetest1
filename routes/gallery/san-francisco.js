var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.renderPjax('gallery/san-francisco', { title: 'Gallery - San Francisco' });
});

module.exports = router;
