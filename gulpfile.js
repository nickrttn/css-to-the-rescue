var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var atImport = require('postcss-import');

gulp.task('prefix', function() {
  var plugins = [
	  atImport,
    autoprefixer({ browsers: ['last 3 versions'] }),
  ];

  return gulp.src('./src/css/styles.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
});

gulp.task('html', function() {
	return gulp.src('./src/*.html')
		.pipe(gulp.dest('./build'))
		.pipe(browserSync.stream());
});

gulp.task('watch', ['prefix'], function() {
	browserSync.init({
		server: {
			baseDir: './build'
		}
	});

	gulp.watch("./src/**/*.css", ['prefix']);
	gulp.watch('./src/*.html', ['html']);
});

gulp.task('default', ['watch']);
