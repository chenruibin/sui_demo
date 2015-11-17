var gulp = require('gulp');
var browserSync = require('browser-sync');
var gp_deploy = require('gulp-gh-pages');

gulp.task('browser-sync', function() {
    browserSync({
        files: "**",
        server: {
            baseDir: "."
        }
    });
});

var options = {};
gulp.task('deploy', function () {
  return gulp.src(['./**/*', '!./node_modules/**'])
  .pipe(gp_deploy(options));
});

gulp.task('default', ["browser-sync"]);
