var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.renderPjax('gallery/los-angeles', { title: 'Gallery - Los Angeles' });
});

module.exports = router;
