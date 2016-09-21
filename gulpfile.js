var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var rsync = require('rsync-slim');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var critical = require('critical');
var postcss = require('gulp-postcss');
var htmlmin = require('gulp-htmlmin');

var env_prod = true;
var src = 'src';
var dist = 'dist';
var bower = 'bower_components';
var distAssets = dist + '/assets';

var srcSass = src + '/assets/sass';
var srcSassFile = src + '/assets/sass/main.sass';
var distCss = dist + '/assets/css';

var srcJs = src + '/assets/js';
var srcJsFiles = [
  "bower_components/scrollmagic/scrollmagic/minified/ScrollMagic.min.js",
  srcJs + '/ui-scroll.js',
  srcJs + '/ui-core.js',
];
var distJs = dist + '/assets/js';
var distJsFile = 'ui-core.min.js';

var srcImgs = src + '/assets/img';


gulp.task('sass', function() {
  return gulp.src(srcSassFile)
    .pipe(sass({
        includePaths: ['bower_components']
      })
      .on('error', sass.logError))
    .pipe(gulp.dest(distCss))
    .pipe(browserSync.stream());
});

gulp.task('css', ['sass'], function() {
  if (!env_prod) {
    return;
  } else {
    var autoprefixer = require('autoprefixer');
    var cssnano = require('cssnano');
    var mqpacker = require('css-mqpacker');

    return gulp.src(distCss + '/*.css')
      .pipe(postcss([
        mqpacker({
          sort: true
        }),
        autoprefixer(),
        cssnano()
      ]))
      .pipe(gulp.dest(distCss));
  }
});

gulp.task('css:watch', function() {
  gulp.watch(srcSass + '**/*.sass', ['css']);
});

gulp.task('js', function(cb) {
  if (env_prod) {
    return gulp.src(srcJsFiles)
      .pipe(concat(distJsFile))
      .pipe(uglify({
        mangle: true,
        compress: {
          sequences: true,
          dead_code: true,
          conditionals: true,
          booleans: true,
          unused: true,
          if_return: true,
          join_vars: true,
        }
      }))
      .pipe(gulp.dest(distJs));
  } else {
    return gulp.src(srcJsFiles)
      .pipe(concat(distJsFile))
      .pipe(gulp.dest(distJs));
  }
});

gulp.task('js:watch', function() {
  gulp.watch(srcJs + '**/*.js', ['js']);
});


gulp.task('browser-sync', function() {
  browserSync.init({
    ghostMode: false,
    online: false,
    notify: false,
    server: {
      baseDir: dist
    }
  });
  gulp.watch([
      dist + '**/*.html',
      distJs + '**/*.js'
    ])
    .on('change', browserSync.reload);
});

gulp.task('jekyll', function(gulpCallBack) {
  var spawn = require('child_process').spawn;
  var jekyll = spawn('jekyll', ['build'], {
    stdio: 'inherit'
  });

  jekyll.on('exit', function(code) {
    gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: ' + code);
  });
});

gulp.task('html:watch', function() {
  gulp.watch([
    src + '/**/*.md',
    src + '/**/*.html'
  ], ['html']);
});

gulp.task('html', ['jekyll'], function() {
  if (!env_prod) {
    return;
  } else {
    return gulp.src(dist + '/**/*.html')
      .pipe(htmlmin({
        collapseWhitespace: true,
        preserveLineBreaks: true,
        removeComments: false,
        minifyCSS: true,
        minifyJS: true
      }))
      .pipe(gulp.dest(dist));
  }
});

gulp.task('images', function() {
  return gulp.src(srcImgs + '/**/*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest(distAssets + '/img'));
});


gulp.task('deploy', function() {
  rsync({
    src: 'dist/',
    dest: 'stgsear1@akascia.com:~/www/stickypixel/',
    // options: '--archive --delete --progress --compress --human-readable --exclude .DS_Store --dry-run'
    options: '--archive --delete --progress --compress --human-readable --exclude .DS_Store'
  });
});

gulp.task('default', function() {
  console.log('No task defined as default');
});

gulp.task('env_dev', function() {
  env_prod = false;
});

gulp.task('env_prod', function() {
  env_prod = true;
});

gulp.task('critical', ['build'], function(cb) {
  critical.generate({
    inline: true,
    base: dist + '/',
    src: 'index.html',
    dest: dist + '/index.html',
    minify: true,
    width: 1440,
    height: 900
  });
});

gulp.task('build', ['html', 'html:watch', 'css', 'css:watch', 'js', 'js:watch', 'browser-sync']);
gulp.task('dev', ['env_dev', 'build']);
gulp.task('prod', ['env_prod', 'critical']);
