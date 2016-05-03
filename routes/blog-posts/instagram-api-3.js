var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.renderPjax('blog-posts/instagram-api-3', { title: 'Instagram API - Part 3' });
});

module.exports = router;
