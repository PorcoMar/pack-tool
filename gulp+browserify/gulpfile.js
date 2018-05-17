var gulp = require("gulp");
var browserify = require("browserify");
var sourcemaps = require("gulp-sourcemaps");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var connect = require('gulp-connect')
var es = require('event-stream');
var rename = require('gulp-rename');
 
gulp.task("browserify", function () { //合并单个文件 
var b = browserify({
  entries: "./src/entry.js",
  debug: true /*告知browserify在运行同时生成内联sourcemap用于调试*/
});
 
return b.bundle()
  .pipe(source("bundle.js"))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest("./dist"))
  .pipe(connect.reload())
});

gulp.task('browEntrigile', function(){  //合并多个入口文件 到多个地址
//定义多个入口文件
    var entityFiles = [
        './src/entry.js',
        './src/entry2.js',
    ];
//遍历映射这些入口文件
    var tasks = entityFiles.map(function(entity){
        return browserify({entries: [entity]})
            .bundle()
            .pipe(source(entity))
            .pipe(rename({
                extname: '.bundle.js',
                dirname: ''
            }))
            .pipe(gulp.dest('./build'))
            .pipe(connect.reload())
    });
//创建一个合并流
    return es.merge.apply(null, tasks);
});

gulp.task("watch", () =>{
    gulp.watch('./src/*.js', ['browserify'])
    gulp.watch('./src/*.js', ['browEntrigile'])
})
gulp.task("server",function(){
    connect.server({
        root:'./',
        port:'8006',
        livereload:true/*热替换（功能为即时刷新）*/
    })
})
gulp.task('default', ['server', 'watch']);
// var gulp = require('gulp');
// var source = require('vinyl-source-stream');
// var rename = require('gulp-rename');
// var browserify = require('browserify');
// var es = require('event-stream');

// gulp.task('browserify', function(){
//     //定义多个入口文件
//     var entityFiles = [
//         './src/main.js',
//         './src/test.js',
//     ];

//     //遍历映射这些入口文件
//     var tasks = entityFiles.map(function(entity){
//         return browserify({entries: [entity]})
//             .bundle()
//             .pipe(source(entity))
//             .pipe(rename({
//                 extname: '.bundle.js',
//                 dirname: ''
//             }))
//             .pipe(gulp.dest('./build'));
//     });

//     //创建一个合并流
//     return es.merge.apply(null, tasks);
// });

// gulp.task("watch",function(){
//   gulp.watch("./src/*.js",["browserify"]);
// });

// 引用glob
// var gulp = require('gulp');
// var source = require('vinyl-source-stream');
// var rename = require('gulp-rename');
// var browserify = require('browserify');
// var es = require('event-stream');
// var glob = require('glob');

// gulp.task('browserify', function(done){
//     glob('./src/*.js', function(err, files) {
//         if(err) done(err);

//         var tasks = files.map(function(item) {
//             return browserify({ entries: [item] })
//                 .bundle()
//                 .pipe(source(item))
//                 .pipe(rename({
//                     extname: '.bundle.js',
//                     dirname: ''
//                 }))
//                 .pipe(gulp.dest('./build'));
//             });
//         es.merge(tasks).on('end', done);
//     })
// });

// gulp.task("watch",function(){
//   gulp.watch("./src/*.js",["browserify"]);
// });