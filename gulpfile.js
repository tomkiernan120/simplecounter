var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task( "default", function(){
    gulp.src('src/simplecounter.js')
        .pipe( uglify() )
        .pipe(gulp.dest('dist/'));
})