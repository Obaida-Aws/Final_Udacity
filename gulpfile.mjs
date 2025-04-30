import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('parcel', shell.task('parcel watch'));
gulp.task('test', shell.task('npx cypress run'));
gulp.task('default', gulp.series('parcel', 'test'));
