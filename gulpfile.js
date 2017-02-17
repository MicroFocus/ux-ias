var gulp = require('gulp');
var gulpAutoprefixer = require('gulp-autoprefixer');
var gulpClean = require('gulp-clean');
var gulpCleanCss = require('gulp-clean-css');
var gulpRename = require('gulp-rename');
var gulpSass = require('gulp-sass');
var gulpSourcemaps = require('gulp-sourcemaps');
var gulpWatch = require('gulp-watch');

var config = {
    directories: {
        output: 'dist'
    },
    files: {
        sassManifest: [ 'src/mfux.scss', 'src/mfux-dark.scss' ],
        srcSass: 'src/**/*.scss'
    }
};

gulp.task('clean', function() {
    return gulp
        .src(config.directories.output)
        .pipe(gulpClean());
});

gulp.task('default', [ 'sass:development', 'watch:sass' ]);

gulp.task('sass:development', function() {
    return gulp
        .src(config.files.sassManifest)
        .pipe(gulpSourcemaps.init())
        .pipe(gulpSass({ outputStyle: 'expanded' }).on('error', gulpSass.logError))
        .pipe(gulpAutoprefixer({ browsers: [ 'last 2 versions' ] }))
        .pipe(gulpSourcemaps.write())
        .pipe(gulp.dest(config.directories.output));
});

gulp.task('sass:production', function() {
    return gulp
        .src(config.files.sassManifest)
        .pipe(gulpSourcemaps.init())
        .pipe(gulpSass({ outputStyle: 'expanded' }).on('error', gulpSass.logError))
        .pipe(gulpAutoprefixer({ browsers: [ 'last 2 versions' ] }))
        .pipe(gulp.dest(config.directories.output))
        .pipe(gulpCleanCss())
        .pipe(gulpRename({ extname: '.min.css' }))
        .pipe(gulpSourcemaps.write('./'))
        .pipe(gulp.dest(config.directories.output));
});

gulp.task('watch:sass', function() {
    return gulpWatch(config.files.srcSass, function() {
        gulp.start('sass:development');
    });
});
