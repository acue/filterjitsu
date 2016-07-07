var del = require('del'),
    gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

var paths = {
  FILENAME: 'jquery.filterjitsu.js',
  FILENAME_MIN: 'jquery.filterjitsu.min.js',
  MIN: '.min',
  SRC: 'src/',
  DIST: 'dist/'
};

gulp.task('clean-dev', function () {
  return del(paths.DIST + paths.FILENAME);
});

gulp.task('clean-prod', function () {
  return del(paths.DIST + paths.FILENAME_MIN);
});

gulp.task('lint', function () {
  return gulp.src(paths.SRC + paths.FILENAME)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('build-dev', ['lint', 'clean-dev'], function () {
  gulp.src(paths.SRC + paths.FILENAME)
    .pipe(gulp.dest(paths.DIST));
});

gulp.task('build-prod', ['lint', 'clean-prod'], function () {
  gulp.src(paths.SRC + paths.FILENAME)
    .pipe(uglify())
    .pipe(rename({suffix: paths.MIN}))
    .pipe(gulp.dest(paths.DIST));
});

gulp.task('watch', function () {
  gulp.watch(paths.SRC + paths.FILENAME, ['build-dev', 'build-prod']);
});

gulp.task('default', ['build-dev', 'build-prod', 'watch']);
