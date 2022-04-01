import gulp from 'gulp'
import ts from 'gulp-typescript'
const tsProject = ts.createProject('tsconfig.json')
import del from 'del'

// Task which would transpile typescript to javascript
gulp.task('typescript', () =>
	tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('dist'))
)

// Task which would delete the old dist directory if present
gulp.task('build-clean', () => del(['./dist']))

// Task which would just create a copy of the current views directory in dist directory
gulp.task('views', () =>
	gulp.src('./src/client/views/**/*.ejs').pipe(gulp.dest('./dist/views'))
)

// Task which would just create a copy of the current static assets directory in dist directory
gulp.task('assets', () => {
	gulp.src('./src/client/js/*').pipe(gulp.dest('./dist/public/js'))
	return gulp.src('./src/client/styles/*').pipe(gulp.dest('./dist/public/styles'))
})

// The default task which runs at start of the gulpfile.js
gulp.task(
	'default',
	gulp.series('build-clean', 'typescript', 'views', 'assets'),
	() => {
		console.clear()
		console.log('Project built')
	}
)
