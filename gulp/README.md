# Gulp 的使用
## 特性
1. 基于 Task（任务）工作
2. 插件丰富、配置方便
## 安装
1. 全局安装
```
npm install gulp -g
yarn global add gulp
```
2. 在项目中安装
```
npm install gulp -D
yarn add gulp -D
```
注：使用 Gulp 时需要同时在全局和项目中安装。
## 配置文件
默认情况下，Gulp 使用 gulpfile.js 作为配置文件，因此需要新建一个。
## gulp.task
Gulp 是基于 Task 的，我们需要在 gulpfile.js 中指定不同的 Task，以完成不同的工作。
Gulp 要求至少提供一个默认的 Task（```default```）。
下面是一个配置了默认 Task 的文件：
```
const gulp = require("gulp");
gulp.task("default",() => {
    gulp.src("src/**/*.js")
        .pipe(gulp.dest("build"))
})
```
## 指定排除文件
如果不想 Gulp 编译某些文件，可以进行排除：
```
const gulp = require("gulp");
gulp.task("default",() => {
    gulp.src(["src/**/*.js","!src/lib/*.js"])
        .pipe(gulp.dest("build"))
})
```
## 指定依赖任务
在使用 ```gulp.task``` 时，还可以指定依赖的任务，这些任务将会在当前任务开始之前执行。
```
const gulp = require("gulp");
gulp.task("default",["test1","test2"],() => {
    gulp.src("src/**/*.js")
        .pipe(gulp.dest("build"))
})

gulp.task("test1",()=>{
    console.log("test1")
})

gulp.task("test2",()=>{
    console.log("test2")
})
```
注：```task1``` 和 ```task2``` 属于异步任务，因此无法保证 ```task1``` 一定会在 ```task2``` 之前执行。要想某个任务在另一个任务之前执行，可以将另一个任务写在依赖任务中：
```
const gulp = require("gulp");
gulp.task("default",["test2"],() => {
    console.log("end")
})

gulp.task("test1",()=>{
    console.log("test1")
})

gulp.task("test2",["test1"],()=>{
    console.log("test2")
})
```
## gulp.watch
使用 ```gulp.watch``` 可以监听文件的变化，当文件发生变化时，就可以自动执行任务。
```
const gulp = require("gulp");
const del = require("del");
// 清除构建目录
gulp.task("clean",() => {
    del(["build/**/*"]);
})

// 编译
gulp.task("compile",["clean"],()=>{
    gulp.src(["src/**/*.js","!src/lib/*.js"])
    .pipe(gulp.dest("build"))
})

// 监控文件变化
gulp.task("autoWatch",()=>{
    return gulp.watch(["src/**/*.js","!src/lib/*.js"],["compile"])
})

gulp.task("default",["autoWatch"])
```
上例中，我们对文件内容进行了监听，当文件内容发生变化时，就会再次执行编译。