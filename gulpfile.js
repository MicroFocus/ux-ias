var async = require('async');
var fs = require('fs');
var gulp = require('gulp');
var gulpAutoprefixer = require('gulp-autoprefixer');
var gulpClean = require('gulp-clean');
var gulpConsolidate = require('gulp-consolidate');
var gulpIconFont = require('gulp-iconfont');
var gulpIconFontCss = require('gulp-iconfont-css');
var gulpRename = require('gulp-rename');
var gulpReplace = require('gulp-replace');
var gulpSass = require('gulp-sass');
var gulpSourceMaps = require('gulp-sourcemaps');

var iconFiles = './icons/*.svg';
var iconFontName = 'mf-icons';
var outputDirectory = './dist/';
var sassManifestFile = './src/mfux.scss';
var pkg = JSON.parse(fs.readFileSync('./package.json'));

gulp.task('clean', function() {
    return gulp.src(outputDirectory)
        .pipe(gulpClean());
});

gulp.task('icons', function(done) {
    var iconStream = gulp
        .src(iconFiles)
        .pipe(gulpIconFont({
            appendCodepoints: true,
            appendUnicode: false,
            centerHorizontally: true,
            cssClass: 'mf-icon',
            fontHeight: 1000,
            fontName: iconFontName,
            fontPath: './fonts/',
            formats: ['eot', 'svg', 'ttf', 'woff', 'woff2'],
            normalize: true
        }));

    async.parallel([
        function handleGlyphs(callback) {
            iconStream.on('glyphs', function (glyphs, options) {
                glyphs = glyphs.map(function(glyph) {
                    glyph.unicode = glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase();
                    return glyph;
                });
                options.glyphs = glyphs;

                async.parallel([
                    function generateCss(callback) {
                        gulp.src('templates/icons.css.template')
                            .pipe(gulpConsolidate('lodash', options))
                            .pipe(gulpRename(iconFontName + '.css'))
                            .pipe(gulp.dest(outputDirectory))
                            .on('finish', callback);
                    },
                    function generateHtml(callback) {
                        gulp.src('templates/icons.html.template')
                            .pipe(gulpConsolidate('lodash', options))
                            .pipe(gulpRename(iconFontName + '.html'))
                            .pipe(gulp.dest(outputDirectory))
                            .on('finish', callback);
                    }
                ], callback);
            });
        },
        function handleFonts(callback) {
            iconStream
                .pipe(gulp.dest(outputDirectory + 'fonts/'))
                .on('finish', callback);
        }
    ], done);
});

gulp.task('sass', function() {
    return processSass(sassManifestFile, { outputStyle: 'expanded' })
        .pipe(gulp.dest(outputDirectory));
});

gulp.task('sass-minified', function() {
    return processSass(sassManifestFile, { outputStyle: 'compressed', sourceMap: true })
        .pipe(gulpRename('mfux.min.css'))
        .pipe(gulp.dest(outputDirectory));
});

gulp.task('build', ['icons', 'sass', 'sass-minified']);

function processSass(filePattern, sassOptions) {
    sassOptions = sassOptions || {};

    return gulp.src(filePattern)
        .pipe(gulpSourceMaps.init())
        .pipe(gulpReplace('%VERSION%', pkg.version))
        .pipe(gulpSass(sassOptions).on('error', gulpSass.logError))
        .pipe(gulpAutoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulpSourceMaps.write('./'));
}
