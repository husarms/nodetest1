var gulp = require('gulp');
var uncss = require('gulp-uncss');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('minify-style', function() {
    return gulp.src('public/stylesheets/style.css')
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
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('public/stylesheets', {overwrite: true}));
});

gulp.task('minify-bootstrap', function() {
    return gulp.src('public/plugins/bootstrap/css/bootstrap.css')
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
        .pipe(rename('bootstrap.min.css'))
        .pipe(gulp.dest('public/plugins/bootstrap/css'));
});

gulp.task('minify-header-default', function() {
    return gulp.src('public/stylesheets/header-default.css')
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
        .pipe(rename('header-default.min.css'))
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('minify-footer-v1', function() {
    return gulp.src('public/stylesheets/footer-v1.css')
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
        .pipe(rename('footer-v1.min.css'))
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('minify-animate', function() {
    return gulp.src('public/stylesheets/plugins/animate.css')
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
        .pipe(rename('animate.min.css'))
        .pipe(gulp.dest('public/stylesheets/plugins'));
});

gulp.task('minify-line-icons', function() {
    return gulp.src('public/plugins/line-icons/line-icons.css')
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
        .pipe(rename('line-icons.min.css'))
        .pipe(gulp.dest('public/plugins/line-icons'));
});

gulp.task('minify-font-awesome', function() {
    return gulp.src('public/plugins/font-awesome/css/font-awesome.css')
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
        .pipe(rename('font-aweesome.min.css'))
        .pipe(gulp.dest('public/plugins/font-awesome/css'));
});

gulp.task('minify-cubeportfolio', function() {
    return gulp.src('public/plugins/cube-portfolio/cubeportfolio/css/cubeportfolio.css')
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
        .pipe(rename('cubeportfolio.min.css'))
        .pipe(gulp.dest('public/plugins/cube-portfolio/cubeportfolio/css'));
});

//gulp.task('minify-fancybox', function() {
//    return gulp.src('public/plugins/fancybox/source/jquery.fancybox.css')
//        .pipe(uncss({
//            html: [
//                'http://localhost:3000/',
//                'http://localhost:3000/gallery/japan',
//                'http://localhost:3000/about-me',
//                'http://localhost:3000/blog',
//                'http://localhost:3000/portfolio'
//            ]
//        }))
//        .pipe(minifyCSS())
//        .pipe(rename('jquery.fancybox.min.css'))
//        .pipe(gulp.dest('public/plugins/fancybox/source'));
//});

gulp.task('minify-settings', function() {
    return gulp.src('public/plugins/revolution-slider/rs-plugin/css/settings.css')
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
        .pipe(rename('settings.min.css'))
        .pipe(gulp.dest('public/plugins/revolution-slider/rs-plugin/css'));
});

gulp.task('minify-settings-ie8', function() {
    return gulp.src('public/plugins/revolution-slider/rs-plugin/css/settings-ie8.css')
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
        .pipe(rename('settings-ie8.min.css'))
        .pipe(gulp.dest('public/plugins/revolution-slider/rs-plugin/css'));
});

gulp.task('minify-page_search', function() {
    return gulp.src('public/stylesheets/pages/page_search.css')
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
        .pipe(rename('page_search.min.css'))
        .pipe(gulp.dest('public/stylesheets/pages'));
});

gulp.task('minify-portfolio-v2', function() {
    return gulp.src('public/stylesheets/pages/portfolio-v2.css')
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
        .pipe(rename('portfolio-v2.min.css'))
        .pipe(gulp.dest('public/stylesheets/pages'));
});

gulp.task('minify-blog', function() {
    return gulp.src('public/stylesheets/pages/blog.css')
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
        .pipe(rename('blog.min.css'))
        .pipe(gulp.dest('public/stylesheets/pages'));
});

gulp.task('minify-page_one', function() {
    return gulp.src('public/stylesheets/pages/page_one.css')
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
        .pipe(rename('page_one.min.css'))
        .pipe(gulp.dest('public/stylesheets/pages'));
});

gulp.task('minify-teal', function() {
    return gulp.src('public/stylesheets/theme-colors/teal.css')
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
        .pipe(rename('teal.min.css'))
        .pipe(gulp.dest('public/stylesheets/theme-colors'));
});

gulp.task('minify-dark', function() {
    return gulp.src('public/stylesheets/theme-skins/dark.css')
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
        .pipe(rename('dark.min.css'))
        .pipe(gulp.dest('public/stylesheets/theme-skins'));
});

//-Run all minify tasks
gulp.task('minify-all',
    [
        'minify-style',
        'minify-bootstrap',
        'minify-header-default',
        'minify-footer-v1',
        'minify-animate',
        'minify-line-icons',
        'minify-font-awesome',
        'minify-cubeportfolio',
        //'minify-fancybox',
        'minify-settings',
        'minify-settings-ie8',
        'minify-page_search',
        'minify-portfolio-v2',
        'minify-blog',
        'minify-page_one',
        'minify-teal',
        'minify-dark'
]);

//gulp.task('default', function() {
//    return gulp.src(['public/stylesheets/style.min.css',
//        'public/plugins/bootstrap/css/bootstrap.min.css',
//        'public/stylesheets/header-default.min.css',
//        'public/stylesheets/footer-v1.min.css',
//        'public/stylesheets/plugins/animate.min.css',
//        'public/plugins/line-icons/line-icons.min.css',
//        'public/plugins/font-awesome/css/font-awesome.min.css',
//        'public/plugins/cube-portfolio/cubeportfolio/css/cubeportfolio.min.css',
//        'public/plugins/fancybox/source/jquery.fancybox.min.css',
//        'public/plugins/revolution-slider/rs-plugin/css/settings.min.css',
//        'public/plugins/revolution-slider/rs-plugin/css/settings-ie8.min.css',
//        'public/stylesheets/pages/page_search.min.css',
//        'public/stylesheets/pages/portfolio-v2.min.css',
//        'public/stylesheets/pages/blog.min.css',
//        'public/stylesheets/pages/page_one.min.css',
//        'public/stylesheets/theme-colors/teal.min.css',
//        'public/stylesheets/theme-skins/dark.min.css',
//    ])
//        .pipe(uncss({
//            html: [
//                'http://localhost:3000/',
//                'http://localhost:3000/gallery/japan',
//                'http://localhost:3000/about-me',
//                'http://localhost:3000/blog',
//                'http://localhost:3000/portfolio'
//            ]
//        }))
//        .pipe(minifyCSS())
//        .pipe(gulp.dest('public/css/'));
//});