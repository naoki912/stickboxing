var gulp = require("gulp");

var browserSync = require("browser-sync");

gulp.task("default", ["debug"]);

gulp.task("debug", () => {
    browserSync({
        server: {
            baseDir: "./build/",
            index  : "index.htm"
        }
    });
});


