var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.renderPjax('blog-posts/instagram-api-1', { title: 'Instagram API - Part 1' });
});

module.exports = router;