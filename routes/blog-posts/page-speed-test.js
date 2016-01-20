var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.renderPjax('blog-posts/page-speed-test', { title: 'Page Speed Battle' });
});

module.exports = router;
