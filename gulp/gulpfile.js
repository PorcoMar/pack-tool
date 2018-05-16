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