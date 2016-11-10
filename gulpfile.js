var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('watch', function(){
    gulp.watch('src/**', ['build:style', 'build:example']);
});
gulp.task('build:style', function(){
    gulp.src(['src/style/**/*.wxss', 'src/example/*.wxss'], {base: "src"})
        .pipe(less())
        .pipe(postcss([autoprefixer(['iOS >= 8', 'Android >= 4.1'])]))
        .pipe(rename(function(path){
            path.extname = '.wxss';
        }))
        .pipe(gulp.dest('dist'));
});
gulp.task('build:example', function(){
    gulp.src(['src/app.js', 'src/app.json', 'src/app.wxss', 'src/example/**', '!src/example/*.wxss'], {base: "src"})
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch', 'build:style', 'build:example']);