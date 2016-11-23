var p = require('./package.json')
var gulp = require('gulp');

var browserify = require('browserify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('default', ['dev', 'prod'], function() {

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