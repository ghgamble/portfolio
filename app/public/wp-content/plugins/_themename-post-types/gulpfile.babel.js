import gulp from 'gulp';
import yargs from 'yargs';
import dartSass from 'sass';
import gulpSass from 'gulp-sass'; 
import cleanCSS from 'gulp-clean-css';
import gulpif from 'gulp-if';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import imagemin from 'gulp-imagemin';
import { deleteAsync } from 'del';
import { hideBin } from 'yargs/helpers';
import webpack from 'webpack-stream';
import named from 'vinyl-named';
import zip from 'gulp-zip';
import replace from 'gulp-replace';
import info from './package.json' with { type: "json" };
// import * as sass from 'sass'; 

const sass = gulpSass(dartSass);

const PRODUCTION = yargs(process.argv).argv.prod;

const paths = {
    styles: {
        src: ['src/assets/scss/bundle.scss'], 
        dest: 'dist/assets/css/'
    },
    images: {
        src: 'src/assets/images/**/*.{jpg,jpeg,png,svg,gif}',
        dest: 'dist/assets/images'
    },
    scripts: {
        src: ['src/assets/js/bundle.js'],
        dest: 'dist/assets/js'
    },
    other: {
        src: ['src/assets/**/*', '!src/assets/{images,js,scss}', '!src/assets/{images,js,scss/**/*}'],
        dest: 'dist/assets'
    },
    package: {
        src: ['**/*', '!.vscode', '!node_modules{,/**}', '!packaged{,/**}', '!src{,/**}', '!.bablerc', '!.gitignore', '!gulpfile.babel.js', '!package.json', '!package-lock.json'],
        dest: 'packaged'
    }
};

export const clean = () => deleteAsync(['dist']);

export const styles = () => {
    return gulp.src(paths.styles.src)
        .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(PRODUCTION, cleanCSS({compatibility: 'ie8'})))
        .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
        .pipe(gulp.dest(paths.styles.dest))
}

export const images = () => {
    return gulp.src(paths.images.src)
        .pipe(gulpif(PRODUCTION, imagemin()))
        .pipe(gulp.dest(paths.images.dest));
}

export const watch = () => {
    gulp.watch(['src/assets/scss/**/*.scss', 'includes/**/*.scsss'], styles);
    gulp.watch(['src/assets/js/**/*.js', 'includes/**/*.js'], scripts);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.other.src, copy);
}

export const copy = () => {
    return gulp.src(paths.other.src)
        .pipe(gulp.dest(paths.other.dest));
}

export const scripts = () => {
    return gulp.src(paths.scripts.src)
        .pipe(named())
        .pipe(webpack({
            module: {
                rules: [
                    {
		        test: /\.js$/,
			    use: {
		                loader: 'babel-loader',
			        options: {
				    presets: ['@babel/preset-env'] //or ['babel-preset-env']
				}
			    }
		    }
		]
            },
	    output: {
	        filename: '[name].js'
        },
        externals: {
            jquery: 'jQuery'
        },
	    devtool: !PRODUCTION ? 'inline-source-map' : false,
        mode: PRODUCTION ? 'production' : 'development' //add this
	}))
	.pipe(gulpif(PRODUCTION, uglify())) //you can skip this now since mode will already minify
	.pipe(gulp.dest(paths.scripts.dest));
}

export const compress = () => {
    return gulp.src(paths.package.src)
        .pipe(replace('_pluginname', info.name))
        .pipe(replace('_themename', info.theme))
        .pipe(zip(`${info.theme}-${info.name}.zip`))
        .pipe(gulp.dest(paths.package.dest));
}

export const dev = gulp.series(clean, watch);
export const build = gulp.series(clean);
export const bundle = gulp.series(build, compress);

export default dev;