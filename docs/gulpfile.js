var gulp = require('gulp');
var ngGulp = require('ng-gulp');
var path = require('path');

var cwd = process.cwd();

ngGulp(gulp, {
    directories: {
        nodeModules: path.resolve(cwd, '../node_modules'),
        output: path.resolve(cwd, '../dist/docs'),
        outputImages: path.resolve(cwd, '../dist/docs/images'),
        outputVendor: path.resolve(cwd, '../dist/docs/vendor')
    },
    externals: {
        'angular-ui-router': 'window["angular-ui-router"]',
		'ng-prism': 'window["ng-prism"]'
    },
    files: {
		indexProduction: 'src/index.production.html',
        sassManifest: [
            'src/app.scss',
            'src/app_dark.scss'
        ],
        vendorDevelopment: [
            path.resolve(cwd, '../node_modules/angular/angular.js'),
            path.resolve(cwd, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
			path.resolve(cwd, '../node_modules/ng-prism/dist/ng-prism.js'),
			path.resolve(cwd, '../node_modules/mf-icons/dist/**/*'),
			'!' + path.resolve(cwd, '../node_modules/mf-icons/dist/mf-icons.min.css')
        ],
        vendorProduction: [
            path.resolve(cwd, '../node_modules/angular/angular.js'),
            path.resolve(cwd, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
			path.resolve(cwd, '../node_modules/ng-prism/dist/ng-prism.js'),
			path.resolve(cwd, '../node_modules/mf-icons/dist/**/*'),
			'!' + path.resolve(cwd, '../node_modules/mf-icons/dist/mf-icons.min.css')
		],
        vendorTest: [
            path.resolve(cwd, '../node_modules/angular/angular.js'),
            path.resolve(cwd, '../node_modules/angular-mocks/angular-mocks.js'),
            path.resolve(cwd, '../node_modules/angular-ui-router/release/angular-ui-router.js')
        ]
    }
});