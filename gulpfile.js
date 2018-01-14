//c.f. https://medium.com/collaborne-engineering/building-polymer-app-with-gulp-dee266d348df

const del = require('del');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const polymerBuildUtils = require('gulp-polymer-build-utils');
const yargs = require('yargs');
const argv = polymerBuildUtils.addYargs(yargs).help().argv;


gulp.task('default', cb => {
  //return runSequence('dist:prepare', 'inline-references', cb);
  return runSequence('dist:prepare', cb);
});

gulp.task('dist:prepare', ['dist:clean'], () => {
  const config = require('./polymer.json');
  return polymerBuildUtils.build(config)()
    .pipe(gulp.dest('dist'));
});

gulp.task('dist:clean', () => del('dist'));

gulp.task('dist:test', function() {
  return polymerBuildUtils.runWct(argv);
});
