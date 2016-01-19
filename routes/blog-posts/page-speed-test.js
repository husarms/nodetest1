var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.renderPjax('blog-posts/01-15-2016', { title: 'Blog Post 01-15-2016' });
});

module.exports = router;
