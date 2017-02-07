var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('prefix', function () {
  var plugins = [
    autoprefixer({ browsers: ['last 4 versions'] }),
  ];
  return gulp.src('./*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream());
});

gulp.task('watch', ['prefix'], function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch("./*.css", ['prefix']);
	gulp.watch("./components/*.css", ['prefix']);
});

gulp.task('default', ['watch']);
