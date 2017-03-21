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
        'angular-ui-router': 'window["angular-ui-router"]'
    },
    files: {
        sassManifest: [
            'src/app.scss',
            'src/app_dark.scss'
        ],
        vendorDevelopment: [
            path.resolve(cwd, '../node_modules/angular/angular.js'),
            path.resolve(cwd, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
            path.resolve(cwd, '../node_modules/mf-icons/dist/**/*')
        ],
        vendorProduction: [
            // TODO: add production dependencies to vendor bundle
        ]
    }
});