//引入gulp及组件
const gulp = require('gulp');
const babel = require('gulp-babel');
const rollup = require("gulp-rollup");
const replace = require("rollup-plugin-replace");

//配置开发和发布路径
const path = {
    //开发环境
    src: './src/nodeuii/**/*.js',
    //发布环境
    build: 'dist',
    //ignore
    ignore: ['./src/nodeuii/config/*.js'],
    //config
    config: './src/nodeuii/config/index.js',
    //pm2
    pm2: './src/nodeuii/pm2.json'
};

//定义开发环境任务
gulp.task('dev', () => {
    return gulp.src(path.src)
        .pipe(babel({
            //不让外部的.babelrc影响内部
            babelrc: false,
            'plugins': ['transform-decorators-legacy','transform-es2015-modules-commonjs']
        }))
        .pipe(gulp.dest(path.build));
});

//定义生产环境任务
gulp.task('prod', () => {
    gulp.src(path.src)
        .pipe(babel({
            babelrc: false,
            ignore: path.ignore,
            'plugins': ['transform-decorators-legacy','transform-es2015-modules-commonjs']
        }))
        .pipe(gulp.dest(path.build));
});

//定义配置项任务(rollup)
gulp.task('config', () => {
    gulp.src(path.pm2).pipe(gulp.dest(path.build));
    gulp.src(path.src)
        .pipe(rollup({
            output: {format: 'cjs'},
            input: path.config,
            plugins: [
                replace({
                    "process.env.NODE_ENV": JSON.stringify('production')
                })
            ]
        }))
        .pipe(gulp.dest(path.build));
});


//默认任务: 开发
let _task = ['dev'];

//生产
// if(process.env.NODE_ENV == 'production') _task = gulpSequence(['lint', 'prod', 'config']);
if(process.env.NODE_ENV == 'production') _task = ['prod', 'config'];

//eslint
if(process.env.NODE_ENV == 'lint') _task = ['lint'];

gulp.task('default', _task, () => {
    //只有在开发环境才进行监听
    if(process.env.NODE_ENV == 'development') gulp.watch(path.src, _task);
});

