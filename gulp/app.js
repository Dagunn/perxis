
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// HTML
const fileInclude = require('gulp-file-include');
const htmlClean = require('gulp-htmlclean');
const webpHTML = require('gulp-webp-html');
//HTML


// SASS
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const webpCss = require('gulp-webp-css');
// SASS

const liveServer = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');
const source = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');
const webp = require('gulp-webp');
const imageMin = require('gulp-imagemin');
const changed = require('gulp-changed');

// const media = require('gulp-group-css-media-queries');



gulp.task('clean:app', function (done) {
  if (fs.existsSync('./app/')) {
    return gulp.src('./app/', { read: false })
      .pipe(clean({ force: true }));
  }
  done();
})

const notifyPlumber = (title) => {
  return {
    errorHandler: notify.onError({
      title: title,
      message: 'Error<%= error.message %>',
      sound: false,
    }),
  };
}
gulp.task('html:app', function () {
  return gulp.src('./src/*.html')
    .pipe(changed('./app/'))
    .pipe(plumber(notifyPlumber('HTML')))
    .pipe(fileInclude({
      prefix: '@@',
      baspath: '@file'
    }))
    .pipe(webpHTML())
    .pipe(htmlClean())
    .pipe(gulp.dest('./app/'))
})

gulp.task('sass:app', function () {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(changed('./app/css/'))
    .pipe(notify(notifyPlumber('scss')))
    .pipe(source.init())
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 version'] }))
    .pipe(sassGlob())
    .pipe(webpCss())
    .pipe(sass())
    .pipe(csso())
    // .pipe(media())
    .pipe(source.write())
    .pipe(gulp.dest('./app/css/'))
})

gulp.task('imgs:app', function () {
  return gulp.src('./src/img/**/*')
    .pipe(changed('./app/img/'))
    .pipe(webp())
    .pipe(gulp.dest('./app/img/'))
    .pipe(gulp.src('./src/img/**/*'))
    .pipe(changed('./app/img/'))
    .pipe(imageMin({ verbose: true }))
    .pipe(gulp.dest('./app/img/'))

})

gulp.task('fonts:app', function () {
  return gulp.src('./src/fonts/**/*')
    .pipe(changed('./app/fonts/'))
    .pipe(gulp.dest('./app/fonts/'))
})

gulp.task('files:app', function () {
  return gulp.src('./src/files/**/*')
    .pipe(changed('./app/files/'))
    .pipe(gulp.dest('./app/files/'))
})

gulp.task('js:app', function () {
  return gulp
    .src('./src/js/*.js')
    .pipe(changed('./app/js/'))
    .pipe(notify(notifyPlumber('JS')))
    .pipe(babel())
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./app/js'))

})



gulp.task('server:app', function () {
  return gulp.src('./app')
    .pipe(liveServer({
      livereload: true,
      open: true
    }))
})



