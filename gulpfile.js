var child_process = require("child_process")
var gulp = require("gulp")

gulp.task("default", ["build"])

gulp.task("build", () =>
    child_process.spawn("npm", ["run", "build"])
)

gulp.task("test", ["build"], () =>
    child_process.spawn("npm", ["run", "test"], { detached: true, stdio: "ignore" }).unref()
)
