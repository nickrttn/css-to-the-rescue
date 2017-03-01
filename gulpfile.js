var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var atImport = require('postcss-import');
var customProperties = require('postcss-custom-properties');

gulp.task('prefix', function() {
  var plugins = [
	  atImport,
	  customProperties,
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

gulp.task('images', function() {
	return gulp.src('./src/images/*.jpg')
		.pipe(gulp.dest('./build/images'))
		.pipe(browserSync.stream());
});

gulp.task('js', function() {
	return gulp.src('./src/*.js')
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
	gulp.watch('./src/*.js', ['js']);
	gulp.watch("./src/images/*.jpg", ['images']);
});

gulp.task('default', ['watch']);
