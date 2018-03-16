/**
 * Created by 94216 on 2018/3/16.
 */
var gulp = require("gulp");
var fileInclude = require("gulp-file-include");
var sass = require("gulp-ruby-sass");

// include 公共模块
gulp.task("fileInclude",function () {
//	适配page中的所有文件夹下的所有html,排除page下的include文件夹中的html
	gulp.src(['src/**/*.html','!src/include/**.html'])
		.pipe(fileInclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task("sass", ()=>
	sass("src/assets/css/main.scss",{

	})
		.on('error', sass.logError)
		.pipe(gulp.dest("dist/assets/css"))
		.pipe(gulp.dest("src/assets/css"))
);

gulp.task("watch",function () {
	gulp.watch(['src/**/*.html'],['fileInclude']);
	gulp.watch(['src/assets/css/main.scss'],['sass']);
});

gulp.task('default',['fileInclude','sass','watch']);