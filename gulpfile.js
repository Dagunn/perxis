

const gulp = require('gulp')


require('./gulp/dev.js');
require('./gulp/app.js');




gulp.task('default', gulp.series(
  'clean:dev',
  gulp.parallel('html:dev', 'sass:dev', 'imgs:dev', 'fonts:dev', 'files:dev', 'js:dev'),
  gulp.parallel('server:dev', 'watch:dev')
));

gulp.task('app', gulp.series(
  'clean:app',
  gulp.parallel('html:app', 'sass:app', 'imgs:app', 'fonts:app', 'files:app', 'js:app'),
  gulp.parallel('server:app')
));

