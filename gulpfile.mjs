import gulp from 'gulp';
import shell from 'gulp-shell';


gulp.task('serve', shell.task('parcel serve index.html --dist-dir dist --port 1234'));


gulp.task('test', shell.task('npx cypress run'));


gulp.task('default', gulp.series('serve', 'test'));
