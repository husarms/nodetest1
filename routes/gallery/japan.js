var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.renderPjax('gallery/japan', { title: 'Gallery - Japan' });
});

module.exports = router;
