var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var util = require('gulp-util');

// available tags: @login, @search, @searchTrue, @searchFalse, @all

gulp.task("test", function () {
  process.env.BROWSER = util.env.browser ? util.env.browser : "chrome";
  process.env.PLATFORM = util.env.platform ? util.env.platform : "desktop";
  process.env.TAG = util.env.tag ? util.env.tag : "@search";
  return gulp.src([])
    .pipe(protractor({
      configFile: "protractor-conf.js",
      args: [
        '--cucumberOpts.tags', process.env.TAG
      ]
    }))
    .on('error', function (e) { throw e })
}
);
