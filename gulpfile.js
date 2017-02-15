var gulp         = require('gulp'),
    plumber      = require('gulp-plumber'),
    gutil        = require('gulp-util'),
    mjml         = require('gulp-mjml'),
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload;

// File path variables

var basePaths = {
    src: 'mjml/',
    dest: 'output/'
};
var paths = {
    html: {
        src: basePaths.src + 'index.mjml',
        dest: basePaths.dest + ''
    },
    includes: {
        src: basePaths.src + 'includes/*.mjml'
    }
};

// Tasks

gulp.task('browserSync', function() {
  browserSync({
      proxy: {
        // Enter your dev environment proxy
        // target: "localhost:8888/yourproject/output"
        target: ""
      }
    });
  });

gulp.task('watch', function() {
  gulp.watch(paths.html.src, ['html']).on('change', reload);
  gulp.watch(paths.includes.src, ['html']).on('change', reload);
});

gulp.task('html', function() {
  return gulp.src(paths.html.src)
    .pipe(mjml())
    .pipe(gulp.dest(paths.html.dest))
});

gulp.task('default', ['browserSync','watch']);
