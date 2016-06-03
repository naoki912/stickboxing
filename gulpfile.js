var gulp = require("gulp")
var browserSync = require("browser-sync")

gulp.task("default", ["build"], () => {
})

gulp.task("build", () => {
})

gulp.task("test", ["browser-sync"], () => {
    gulp.watch("build/*.htm", ["browser-sync-reload"])
    gulp.watch("build/*.css", ["browser-sync-reload"])
})

gulp.task("browser-sync", () => {
    browserSync({
        server: {
            baseDir: "build/",
            index  : "index.htm"
        }
    })
})

gulp.task("browser-sync-reload", () => {
    browserSync.reload()
})
