import { src, dest, series, parallel, watch } from "gulp";
import sass from "gulp-sass";
import cleanCSS from "gulp-clean-css";
import htmlmin from "gulp-htmlmin";
import browserSync from "browser-sync";
import * as del from "del";
import webpack from "webpack";
import webpackConfig from "./webpack.config.cjs";
import dartSass from "sass";

const scss = sass(dartSass);
const bs = browserSync.create();

function clean() {
  return del.deleteAsync(["dist"]);
}

function html() {
  return src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist"))
    .pipe(bs.stream());
}

function styles() {
  return src("src/scss/style.scss")
    .pipe(scss().on("error", scss.logError))
    .pipe(cleanCSS())
    .pipe(dest("dist/assets/css"))
    .pipe(bs.stream());
}

function scripts(cb: (error?: any) => void) {
  webpack(webpackConfig as webpack.Configuration, (err, stats) => {
    if (err || stats?.hasErrors()) {
      console.error(err || stats?.toString());
    }
    cb();
  });
}

function serve() {
  bs.init({
    server: {
      baseDir: "./dist",
    },
  });

  watch("src/*.html", html);
  watch("src/scss/**/*.scss", styles);
  watch(
    "src/ts/**/*.ts",
    series(scripts, (done) => {
      bs.reload();
      done();
    })
  );
}

export const build = series(clean, parallel(html, styles, scripts));
export const dev = series(build, serve);
export default dev;
