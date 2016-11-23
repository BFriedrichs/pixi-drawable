var p = require('./package.json')
var gulp = require('gulp');

var browserify = require('browserify'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    batch = require('gulp-batch'),
    sourcemaps = require('gulp-sourcemaps'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer')

gulp.task('default', ['build'], function() {

});

gulp.task('build', ['dev', 'prod'], function() {

});

gulp.task('watch', function() {
  watch('./src/**/*.js', batch(function (events, done) {
      gulp.start('build', done);
  }));
});

gulp.task('dev', function() {
    var bundle = browserify({
      entries: ['./src/index.js'],
      debug: true
    }).bundle();

    return bundle
      .pipe(source(p.name + '.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist'))
});

gulp.task('prod', function() {
    var bundle = browserify({
      entries: ['./src/index.js'],
      debug: true
    }).bundle();

    return bundle
      .pipe(source(p.name + '.min.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist'))
});