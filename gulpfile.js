var gulp = require('gulp');
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

gulp.task('watch', ['browserSync'], function() {
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('**/*/*.css', browserSync.reload);
})