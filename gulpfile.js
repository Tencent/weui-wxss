const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const cssnano = require('gulp-cssnano');
const header = require('gulp-header');
const autoprefixer = require('autoprefixer');
const pkg = require('./package.json');

let watchTimeout = null;

gulp.task('build:style', function() {
  var banner = [
    '/*!',
    ' * WeUI v<%= pkg.version %> (<%= pkg.homepage %>)',
    ' * Copyright <%= new Date().getFullYear() %> Tencent, Inc.',
    ' * Licensed under the <%= pkg.license %> license',
    ' */',
    ''
  ].join('\n');
  gulp
    .src(['src/**/*.less'], { base: 'src' })
    .pipe(less())
    .pipe(postcss([autoprefixer(['iOS >= 8', 'Android >= 4.1'])]))
    .pipe(
      cssnano({
        zindex: false,
        autoprefixer: false,
        discardComments: { removeAll: true },
        svgo: false
      })
    )
    .pipe(header(banner, { pkg: pkg }))
    .pipe(
      rename(function(path) {
        path.extname = '.wxss';
      })
    )
    .pipe(gulp.dest('dist'));
});
gulp.task('build:example', function() {
  gulp
    .src(
      [
        'src/*.!(less)',
        'src/**/*.!(less)',
      ],
      { base: 'src' }
    )
    .pipe(gulp.dest('dist'));
});
gulp.task('build', ['build:style', 'build:example']);

gulp.task('default', ['build:style', 'build:example'], function() {
    gulp.watch(path.resolve(__dirname, 'src/**/*')).on('change', function() {
        clearTimeout(watchTimeout);

        watchTimeout = setTimeout(() => {
            gulp.run(['build:style', 'build:example']);
        }, 300);
    });
});
