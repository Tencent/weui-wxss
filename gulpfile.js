const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const cssnano = require('gulp-cssnano');
const header = require('gulp-header');
const autoprefixer = require('autoprefixer');
const pkg = require('./package.json');
const exec = require('child_process').exec;
const replace = require('gulp-replace')

const banner = [
    '/*!',
    ' * WeUI v<%= pkg.version %> (<%= pkg.homepage %>)',
    ' * Copyright <%= new Date().getFullYear() %> Tencent, Inc.',
    ' * Licensed under the <%= pkg.license %> license',
    ' */',
    ''
].join('\n');

let watchTimeout = null;

function buildStyle() {
    console.log('buildStyle');
    return gulp
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
    // px版本
    .pipe(
        rename(function(path) {
            path.extname = '.wxss';
        })
    )
    .pipe(gulp.dest('dist'))

    // rpx版本
    .pipe(
        replace(/([\d.]+)px/g, function(w, m) {
            return `${2 * m}rpx`
        })
    )
    .pipe(gulp.dest('dist-rpx-mode'));
}
function buildExample() {
    return gulp
    .src(
        [
            'src/*.!(less)',
            'src/**/*.!(less)',
        ],
        { base: 'src' }
    )
    .pipe(gulp.dest('dist-rpx-mode'))
    .pipe(gulp.dest('dist'));
}
function buildExampleStyle() {
    return gulp
    .src(
        [
            'dist/example/**/*.wxss',
            'dist/app.wxss',
        ],
        { base: 'src' }
    )
    .pipe(
        replace(/font-size\s*:\s*([\d\.]+)px/g, function(w, m) {
            // 小程序采用rem方式从客户端拿的默认字号，客户端默认是17px
            return `font-size:${m / 17}rem`
        })
    )
    .pipe(gulp.dest('dist'));
}

gulp.task('build:style', buildStyle);
gulp.task('build:example', gulp.parallel(buildExample, buildExampleStyle));
gulp.task('build', gulp.series('build:style', 'build:example'));

gulp.task('default', gulp.parallel('build', function() {
    return gulp.watch(path.resolve(__dirname, 'src/**/*')).on('change', function(path) {
        clearTimeout(watchTimeout);

        console.log('wxss change');
        watchTimeout = setTimeout(() => {
            buildStyle().on('end', function() {
                console.log('buildStyle End');
                buildExample().on('end', function() { console.log('buildExample End'); });
                buildExampleStyle().on('end', function() { console.log('buildExampleStyle End'); });
            });
        }, 300);
    });
}));

gulp.task('tag', function() {
    return new Promise(resolve => {
        const tag = `v${pkg.version}`;
        exec(`git tag ${tag}`).then(resolve);
    });
});
