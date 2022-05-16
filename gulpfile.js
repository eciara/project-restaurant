const { watch, src, dest, series, parallel } = require('gulp'),
    browsersync = require('browser-sync'),
    phpConnect = require('gulp-connect-php'),
    del = require('del'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    vftp = require("vinyl-ftp"),
    babel = require('gulp-babel'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream');

const config = {
    app: {
        scss: './src/scss/**/*.scss',
        js: './src/js/**/*.js',
        entryJs: './src/js/main.js',
        php: './src/templates/**/*.php',
        includes: './src/includes/*.php',
        views: './src/views/*.php',
        images: './src/images/**',
        css: './src/css/*.css'
    },
    dist: {
        base: './dist/',
        includes: './dist/includes',
        views: './dist/views',
        css: './dist/assets/css',
        js: './dist/assets/js',
        images: './dist/assets/images',
        fonts: './dist/assets/fonts',
        webfonts: './dist/assets/webfonts'
    },
}

function compileJs(done) {
    browserify(config.app.entryJs)
        .transform(babelify, { presets: ["@babel/preset-env"] })
        .bundle().on('error', function (err) { console.log(err.stack); })
        .pipe(source("page.js")).on('error', function (e) { console.log(e) })
        .pipe(dest(config.dist.js)).on('error', function (e) { console.log(e) })
    done();
}

function compileStyles(done) {
    src(config.app.scss)
        .pipe(sass({ outputStyle: 'expanded', includePaths: ['node_modules'] }).on('error', sass.logError))
        .pipe(postcss([autoprefixer()])).on('error', function (e) { console.log(e) })
        .pipe(dest(config.dist.css)).on('error', function (e) { console.log(e) })
    done();
}

function compileCss(done) {
    src(config.app.css)
       .pipe(dest(config.dist.css)).on('error', function (e) { console.log(e) })
     done();
}

function compileWebFonts(done) {
    src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
        .pipe(dest(config.dist.webfonts)).on('error', function (e) { console.log(e) })
    done();
}

function compileFontAwesome(done) {
    src('node_modules/@fortawesome/fontawesome-free/css/all.min.css')
        .pipe(dest(config.dist.fonts)).on('error', function (e) { console.log(e) })
    done();
}

function buildTemplatesFiles(done) {
    src(config.app.php)
        .pipe(dest(config.dist.base)).on('error', function (e) { console.log(e) })
    done();
}

function buildIncludesFiles(done) {
    src(config.app.includes)
        .pipe(dest(config.dist.includes)).on('error', function (e) { console.log(e) })
    done();
}

function buildViewsFiles(done) {
    src(config.app.views)
        .pipe(dest(config.dist.views)).on('error', function (e) { console.log(e) })
    done();
}

function buildImages(done) {
    src(config.app.images)
        .pipe(dest(config.dist.images)).on('error', function (e) { console.log(e) })
    done();
}

function watchFiles() {
    watch(config.app.images, series(buildImages, browserSyncReload))
    watch(config.app.js, series(compileJs, browserSyncReload))
    watch(config.app.scss, series(compileStyles, browserSyncReload));
    watch(config.app.php, series(buildTemplatesFiles, buildIncludesFiles, buildViewsFiles, browserSyncReload));
}

function connectsync() {
    phpConnect.server({
        port: 3000,
        keepalive: true,
        base: config.dist.base,
        stdio: 'ignore',

    },
        function () {
            browsersync({
                proxy: '127.0.0.1:3000'
            });
        });
}

function browserSyncReload(done) {
    browsersync.reload();
    done();
}

function clean() {
    return del([config.dist.base]);
}

function deploy() {
    const conn = vftp.create({
        host: '',
        user: '',
        password: '',
        parallel: 10,
        debug: true
    });

    const globs = [
        'dist/**'
    ];
    return src(globs, { base: 'dist', buffer: false })
        .pipe(conn.newer('/'))
        .pipe(conn.dest('/'));
}

exports.deploy = deploy;
exports.dev = parallel(compileJs, compileStyles, buildIncludesFiles, buildTemplatesFiles, buildViewsFiles, connectsync, buildImages, watchFiles);
exports.build = series(clean, parallel(compileJs, compileFontAwesome, compileWebFonts, compileStyles, compileCss, buildTemplatesFiles, buildIncludesFiles, buildViewsFiles, buildImages));
