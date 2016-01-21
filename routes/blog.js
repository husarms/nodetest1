var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.renderPjax('blog', { title: 'Blog' });
});

module.exports = router;
