var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.renderPjax('blog-posts/instagram-api', { title: 'Instagram API' });
});

module.exports = router;
