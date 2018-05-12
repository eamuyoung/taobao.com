var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
//var html = require('gulp-minify-html');
//var mcss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
//var babel = require('gulp-babel');


//1.js语法错误报告
gulp.task('jshint',function(){
	gulp.src('js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('gulp-jshint-html-reporter',{filename:'error.html'}));
});


//2.js代码的合并，将所有js文件合并成一个文件
gulp.task('alljs',function(){
	gulp.src('js/*.js')
	.pipe(concat('all.js'))
	.pipe(gulp.dest('script/'));
});


//3.js代码的压缩
gulp.task('uglifyjs',function(){
	gulp.src('js/*.js')
	.pipe(concat('all.js'))
	.pipe(gulp.dest('script/'))
	.pipe(rename('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('script'));
});

//监听
gulp.task('watchjs',function(){
	gulp.watch('js.js',function(){
		gulp.run('uglifyjs');
	})
});
//自动刷新
/*gulp.task('html', function () {
    gulp.src('index.html')//指定被刷新的html路径
    .pipe(connect.reload());
});

gulp.task('connect',function(){
	connect.server({
		port:8888,
		livereload:true
	});
});

gulp.task('watch', function () {
    gulp.watch('*.html', ['html']);  //监听html目录下所有文件
});

gulp.task('default',['watch','html','connect']); */

gulp.task('connect',function(){
	gulp.src('index.html')//指定被刷新的html路径
    .pipe(connect.reload())
	.pipe(connect.server({
		port:8888,
		livereload:true
	}))
	.pipe(gulp.watch('*.html', ['html'])); 
});
