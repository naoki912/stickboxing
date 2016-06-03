var gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task("browser-sync", () => {
    browserSync({
        server: {
            baseDir: "./build/",
            index  : "index.htm"
        }
    });
});

gulp.task("browser-sync-reload", () => {
    browserSync.reload();
});
 
gulp.task("default", ["browser-sync"], () => {
    gulp.watch("build/*.htm", ['browser-sync-reload']);
    gulp.watch("build/*.css", ['browser-sync-reload']);
});
