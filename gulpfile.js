var gulp = require("gulp");
var server = require("gulp-server-livereload");
var sass = require("gulp-sass");
var prefix = require("gulp-autoprefixer");
var wiredep = require('wiredep').stream;
// #################### 
// var postcss = require('gulp-postcss');
// var autoprefixer = require('autoprefixer');

var imagemin = require('gulp-imagemin');

var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
 
gulp.task('build', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('build'));
});


gulp.task('bower', function () {
  gulp.src('app/*.html')
    .pipe(wiredep({
      directory: 'app/libs'
    }))
    .pipe(gulp.dest('app'));
});


//SERVER
gulp.task('server', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      open: true
    }));
});

//STYLES
gulp.task('style', function () {
  gulp.src('app/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
    	browsers: ['IE > 8','Chrome > 20' , 'Firefox > 20', 'Opera > 11.1', 'iOS > 7', 'Safari > 7']
    }))
    .pipe(gulp.dest('app/css'));
});




gulp.task('watch', function () {
  gulp.watch('app/sass/**/*.sass', ['style']);
  gulp.watch('bower.json', ['bower']);
});




// gulp.task('minimg', () =>
//   gulp.src('app/img/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('build/img'))
// );



gulp.task('default', ['server', 'watch']);