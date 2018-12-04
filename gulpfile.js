var gulp = require('gulp');
var uglify = require('gulp-uglify');
var header = require('gulp-header');

var pkg = require('./package.json');
var banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''].join('\n');

gulp.task("default", function () {
    gulp.src('src/simplecounter.js')
        .pipe(uglify({
            parse: {
                // parse options
            },
            compress: {
                // compress options
            },
            mangle: {
                // mangle options

                properties: {
                    // mangle property options
                }
            },
            output: {
                // output options
                beautify: false,
            },
            sourceMap: {
                // source map options
            },
            nameCache: null, // or specify a name cache object
            toplevel: false,
            ie8: false,
            warnings: false,
        }))
        .pipe( header( banner, { pkg: pkg } ) )
        .pipe(gulp.dest('dist/'));
})