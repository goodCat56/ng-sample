var gulp = require('gulp'),
    rename = require('gulp-rename'),
    del = require('del'),
    sass = require('gulp-sass'),
    traceur = require('gulp-traceur'),
    webserver = require('gulp-webserver');



// run init tasks
gulp.task('default', ['dependencies', 'js', 'html', 'sass','images']);

// run development task
gulp.task('dev', ['watch', 'serve']);

// serve the build dir
gulp.task('serve', function () {
  gulp.src('build')
    .pipe(webserver({
      open: true
    }));
});

// watch for changes and run the relevant task
gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.scss', ['sass']);
  gulp.watch('src/**/images', ['images']);
});

// move dependencies into build dir
gulp.task('dependencies', function () {
  return gulp.src([
    'node_modules/traceur/bin/traceur-runtime.js',
    'node_modules/systemjs/dist/system-csp-production.src.js',
    'node_modules/systemjs/dist/system.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/angular2/bundles/angular2.js',
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/es6-shim/es6-shim.min.js',
    'node_modules/es6-shim/es6-shim.map',
    'node_module/es6-shim/es6-shim.map'
  ])
    .pipe(gulp.dest('build/lib'));
});


// transpile & move js
gulp.task('js', function () {
  return gulp.src('src/**/*.js')
    .pipe(rename({
      extname: ''
    }))
    .pipe(traceur({
      modules: 'instantiate',
      moduleName: true,
      annotations: true,
      types: true,
      memberVariables: true
    }))
    .pipe(rename({
      extname: '.js'
    }))
    .pipe(gulp.dest('build'));
});

// move html
gulp.task('html', function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'))
});

// move images
gulp.task('images', function() {
  return gulp.src('src/**/images/**/*')
    .pipe(gulp.dest('build'));
});

//Converts the sass to css
gulp.task('sass', function() {
  return gulp.src('src/**/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass({
        includePaths: ['bower_components/bootstrap-sass/assets/stylesheets'],
    }))
    .pipe(gulp.dest('build'));
})

//Cleans the deleted folder from build
gulp.task('clean', function() {
  return del(gulp.build + '/**/*', { force: true });
});