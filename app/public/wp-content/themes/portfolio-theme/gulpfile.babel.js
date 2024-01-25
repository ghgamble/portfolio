// var gulp = require('gulp');

// gulp.task('default', defaultTask);

// function defaultTask(done) {
//     console.log('hey');
//     // Place code for your default task here
//     done();
// }

// gulp.task('hello', function(done) {
//     console.log('hello');
//     done();
// })

import gulp from 'gulp';

export const hello = (done) => {
    console.log('hello');
    done();
}

export default hello;