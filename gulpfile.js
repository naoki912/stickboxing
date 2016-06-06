var browserSync = require("browser-sync")
var gulp = require("gulp")
var gulpWebpack = require("gulp-webpack")

gulp.task("default", ["build"], () => {
})

gulp.task("build", () => {
    gulp.src(["src/stickboxing/main.js"])
        .pipe(gulpWebpack({
            output: {
                filename: "main.js"
            }
        }))
        .pipe(gulp.dest("build/js"))
    
    gulp.src(["lib/enchant.js"])
        .pipe(gulp.dest("build/js"))
    
    gulp.src(["res/html/index.html"])
        .pipe(gulp.dest("build"))
})

gulp.task("test", () => {
    browserSync({
        server: {
            baseDir: "build/",
            index: "index.html"
        }
    })
})
