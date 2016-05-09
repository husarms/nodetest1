var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.renderPjax('blog-posts/google-maps-api-1', { title: 'Google Maps API - Part 1' });
});

module.exports = router;
/**
 * Created by 164350 on 5/6/2016.
 */
