var gulp = require('gulp'),
    htmlhint = require('gulp-htmlhint'),
    csslint = require('gulp-csslint');


gulp.task('default', function() {
  gulp.src('./index.html')
    .pipe(htmlhint())
    .pipe(htmlhint.reporter());

  gulp.src('css/styles.css')
    .pipe(csslint())
    .pipe(csslint.reporter());
});