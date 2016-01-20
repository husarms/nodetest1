var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.renderPjax('blog-posts/japan-part-1', { title: 'Japan Part 1' });
});

module.exports = router;
