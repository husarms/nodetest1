var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.renderPjax('blog-posts/audio-visualizer', { title: 'Audio Visualizer' });
});

module.exports = router;
