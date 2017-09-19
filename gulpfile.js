var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            routes: {
                '/css': 'css',
                '/js': 'js'
            }
        }
    })
})

gulp.task('watch', ['browserSync'], function () {
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('**/*/*.css', browserSync.reload);
})

gulp.task('sass', function () {
    return gulp.src('./**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/styles.css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./**/*.scss', ['sass']);
});