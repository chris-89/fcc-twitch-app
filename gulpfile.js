const babelify = require('babelify');
const browserify = require('browserify');
const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const declare = require('gulp-declare');
const defineMod = require('gulp-define-module');
const handlebars = require('gulp-handlebars');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const compileHB = require('gulp-precompile-handlebars');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const gutil = require('gulp-util');
const wrap = require('gulp-wrap');
const source = require('vinyl-source-stream');
const watchify = require('watchify');


const jsEntry = './src/js/app.js';
const jsBundle = 'app.bundle.js';
const jsSrc = './src/js/*.js';
const sassSrc = './src/styles/*.scss';
const allSass = ['./src/styles/reset.scss', './src/styles/main.scss', './src/styles/user-tile.scss'];
const htmlSrc = './src/index.html';
const hbSrc = './src/templates/raw/*.hbs';
const hbDest = './src/templates/compiled';
const dist = './dist';

const handleErr = function(err) {
    notify.onError({
        title: 'Gulp error in ' + err.plugin,
        message: err.toString()
    })(err);
    gutil.beep();
}
//TASKS ---------------------------------------------

//SERVER
gulp.task('browSync', function() {
    browserSync.init({
        server: dist,
    })
})

//HTML
//[to dest]
gulp.task('copyHtml', function() {
    console.log('copying html')
    gulp.src(htmlSrc)
    .pipe(gulp.dest(dist))
    .pipe(browserSync.stream());
})

//JS
//[babelify, bundle, rename, to dest, update browserSync]
gulp.task('scripts', function() {
    console.log('compiling scripts');
    gulp.src(jsEntry)
    .pipe(plumber({errorHandler: handleErr}))
    .pipe(browserify(jsEntry)
    .transform("babelify", {
            presets: ['env'],
    })
    .bundle()
    .pipe(source(jsEntry))
    .pipe(rename(jsBundle))
    .pipe(gulp.dest(`${dist}/js`))
    .pipe(browserSync.stream()));
    console.log('finished compiling scripts');
})

//CSS| SASS
//[compile scss to css, rename, to dest, update browserSync]
gulp.task('styles', function() {
    console.log('compiling styles')
    gulp.src(allSass)
    .pipe(plumber({errorHandler: handleErr}))
    .pipe(concat('main.scss'))
    .pipe(sass())
    .pipe(rename('styles.css'))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest(`${dist}/styles`))
    .pipe(browserSync.stream());;
    console.log('finished compiling styles');
})

//HANDLEBARS
gulp.task('templates', function() {
    return gulp.src(hbSrc)
    .pipe(handlebars({
        handlebars: require('handlebars')
    }))
    .pipe(rename({extName: '.js'}))
    .pipe(defineMod('es6'))
    .pipe(gulp.dest(hbDest));
})
//WATCH
gulp.task('watch', function() {
    gulp.watch(htmlSrc, ['copyHtml']);
    gulp.watch(jsSrc, ['scripts']);
    gulp.watch(sassSrc, ['styles']);
    gulp.watch(hbSrc, ['templates']);
})


//DEFAULT RUN
gulp.task('default', ['browSync', 'scripts', 'styles', 'templates', 'watch'])

//WATCHIFY GULP TASK
/*gulp.task('js', function() {
    const b = browserify({
        entries: './src/js/app.js',
        debug: true,
        cache: {},
        packageCache: {},
        plugin: [watchify]
    })
    let trundle = function() {
        console.log('UPDATING...')
        b.transform("babelify", {
                presets: ['env'],
            })
            .bundle()
            .pipe(source('app.js'))
            .pipe(rename('app.bundle.js'))
            .pipe(gulp.dest('dist'))
        console.log('UPDATE FINISHED')
    }
    b.on('update', trundle)
    trundle();
})*/

//copy html to dist

//gulp.watch('src/*.js', gulp.task);
//gulp.watch('files to watch [pass in a glob]', ['taskNames', 'to', 'do'])
//dependencies
// npm install
// gulp
// gulp-sass //compiles sass|scss to css
// gulp-babel

//globbing //regex for files
// *.scss // matches any in current dir
// **/*.scss // matches any in the root or child dir
// !not-me.scss// exludes pattern from any matches
// *.+(sass|scss) // matches multiple
