var gulp = require('gulp');
var uncss = require('gulp-uncss');
var minifyCSS = require('gulp-minify-css');

gulp.task('default', function() {
    return gulp.src(['public/stylesheets/style.min.css',
        'public/plugins/bootstrap/css/bootstrap.min.css',
        'public/stylesheets/header-default.min.css',
        'public/stylesheets/footer-v1.min.css',
        'public/stylesheets/plugins/animate.min.css',
        'public/plugins/line-icons/line-icons.min.css',
        'public/plugins/font-awesome/css/font-awesome.min.css',
        'public/plugins/cube-portfolio/cubeportfolio/css/cubeportfolio.min.css',
        'public/plugins/fancybox/source/jquery.fancybox.min.css',
        'public/plugins/revolution-slider/rs-plugin/css/settings.min.css',
        'public/plugins/revolution-slider/rs-plugin/css/settings-ie8.min.css',
        'public/stylesheets/pages/page_search.min.css',
        'public/stylesheets/pages/portfolio-v2.min.css',
        'public/stylesheets/pages/blog.min.css',
        'public/stylesheets/pages/page_one.min.css',
        'public/stylesheets/theme-colors/teal.min.css',
        'public/stylesheets/theme-skins/dark.min.css',
    ])
        .pipe(uncss({
            html: [
                'http://localhost:3000/',
                'http://localhost:3000/gallery/japan',
                'http://localhost:3000/about-me',
                'http://localhost:3000/blog',
                'http://localhost:3000/portfolio'
            ]
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('public/css/'));
});