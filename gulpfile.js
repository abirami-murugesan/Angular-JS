const gulp = require("gulp");
const concat = require("gulp-concat");
const connect = require("gulp-connect");
const browserSync = require("browser-sync").create();
var karma = require("karma").Server;

const protractor = require("gulp-protractor").protractor;

const webdriver_standalone = require("gulp-protractor").webdriver_standalone;
const webdriver_update = require("gulp-protractor").webdriver_update_specific;

// const scripts = require("./scripts");
// const styles = require("./styles");

// Some pointless comments for our project.

var devMode = false;

gulp.task("css", function (done) {
  gulp
    .src("style.css")
    //.pipe(concat("style.css"))
    .pipe(gulp.dest("dist/"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
  done();
});

gulp.task("js", function (done) {
  gulp
    .src("./app/**/*.js")
    // npm install karma --save-dev.pipe(concat("app.js"))
    .pipe(gulp.dest("./dist"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
  done();
});

gulp.task("js-app", function (done) {
  gulp
    .src("./app.js")
    // npm install karma --save-dev.pipe(concat("app.js"))
    .pipe(gulp.dest("./dist"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
  done();
});

gulp.task("html", function () {
  return gulp
    .src("./app/**/*.html")
    .pipe(gulp.dest("./dist"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task("index-html", function () {
  return gulp
    .src("./index.html")
    .pipe(gulp.dest("./dist"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task("browser-sync", function () {
  browserSync.init(null, {
    open: false,
    server: {
      baseDir: "dist",
    },
  });

  devMode = true;

  // gulp.watch("./**/*.css", gulp.series("css"));
  ///// gulp.watch("./**/*.js", gulp.series("js"));
  // gulp.watch("./**/*.html", gulp.series("html"));
});

gulp.task("test", function (done) {
  karma.start(
    {
      configFile: __dirname + "/karma.conf.js",
      singleRun: true
    },
    function () {
      done();
    }
  );
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true
//     port : 
  });
});

gulp.task("webdriver_standalone", webdriver_standalone);

// Downloads the selenium webdriver - stupid solution to pass extra args like ignore_ssl
gulp.task(
  "webdriver_update",
  webdriver_update({
    browsers: ["ignore_ssl"],
  })
);

gulp.task("e2e", function (done) {
  gulp
    .src(["./e2e-tests/spec.js"])
    .pipe(
      protractor({
        configFile: "./protractor.conf.js",
      })
    )
    .on("error", function (e) {
      console.log(e);
    })
    .on("end", function () {
      done();
    });
});

gulp.task(
  "default",
  gulp.parallel(
    "js",
    "css",
    "html",
    "js-app",
    "index-html"
//     "webserver",
//     "test",
    // "webdriver_standalone",
//     "webdriver_update",
//     "e2e"
  )
);
