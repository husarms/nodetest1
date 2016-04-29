var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.renderPjax('blog-posts/instagram-api-2', { title: 'Instagram API - Part 2' });
});

module.exports = router;
