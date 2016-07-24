var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var pjax = require('express-pjax');

//Routes
var index = require('./routes/index');
//var users = require('./routes/users');
var portfolio = require('./routes/portfolio');
var blog = require('./routes/blog');
var gallery = require('./routes/gallery');
var galleryJapan = require('./routes/gallery/japan');
var galleryLasVegas = require('./routes/gallery/las-vegas');
var galleryLosAngeles = require('./routes/gallery/los-angeles');
var gallerySanFrancisco = require('./routes/gallery/san-francisco');
var aboutMe = require('./routes/about-me');
var aboutThisSite = require('./routes/about-this-site');
var blogPostPageSpeedTest = require('./routes/blog-posts/page-speed-test');
var blogPostJapanPart1 = require('./routes/blog-posts/japan-part-1');
var blogPostAudioVisualizer = require('./routes/blog-posts/audio-visualizer');
var blogPostInstagramAPI1 = require('./routes/blog-posts/instagram-api-1');
var blogPostInstagramAPI2 = require('./routes/blog-posts/instagram-api-2');
var blogPostInstagramAPI3 = require('./routes/blog-posts/instagram-api-3');
var blogPostGoogleMapsAPI = require('./routes/blog-posts/google-maps-api');
var blogPostCentralHighSchool = require('./routes/blog-posts/central-high-school');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(pjax());
//app.use(express.compress());

//app.use('/', routes);
//make blog the root
app.use('/',index);
//app.use('/users', users);
app.use('/portfolio', portfolio);
app.use('/blog', blog);
app.use('/gallery', gallery);
app.use('/gallery/japan', galleryJapan);
app.use('/gallery/las-vegas', galleryLasVegas);
app.use('/gallery/los-angeles', galleryLosAngeles);
app.use('/gallery/san-francisco', gallerySanFrancisco);
app.use('/about-me',aboutMe);
app.use('/about-this-site',aboutThisSite);
app.use('/index',index);
app.use('/blog/posts/page-speed-test',blogPostPageSpeedTest);
app.use('/blog/posts/japan-part-1',blogPostJapanPart1);
app.use('/blog/posts/audio-visualizer',blogPostAudioVisualizer);
app.use('/blog/posts/instagram-api-1',blogPostInstagramAPI1);
app.use('/blog/posts/instagram-api-2',blogPostInstagramAPI2);
app.use('/blog/posts/instagram-api-3',blogPostInstagramAPI3);
app.use('/blog/posts/google-maps-api',blogPostGoogleMapsAPI);
app.use('/blog/posts/central-high-school',blogPostCentralHighSchool);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
