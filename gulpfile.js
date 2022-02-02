const gulp = require('gulp');
const minifyCSS = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

gulp.task('default', function () {
  return gulp.src('stories/**/*.css')
    .pipe(minifyCSS())
    .pipe(rename('app.min.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(gulp.dest('dist/'))
});