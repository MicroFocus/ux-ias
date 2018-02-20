var gulp = require('gulp');
var ngGulp = require('ng-gulp');
var path = require('path');

ngGulp(gulp, {
    devServer: {
        root: [
            path.resolve(__dirname, '../dist')
        ]
    },
    directories: {
        nodeModules: path.resolve(__dirname, '../node_modules'),
        output: path.resolve(__dirname, '../dist'),
        outputImages: path.resolve(__dirname, '../dist/images'),
        outputVendor: path.resolve(__dirname, '../dist/vendor')
    },
    externals: {
        'angular-ui-router': 'window["angular-ui-router"]',
        'ng-prism': 'window["ng-prism"]'
    },
    files: {
        indexProduction: 'src/index.production.html',
        vendorDevelopment: [
            path.resolve(__dirname, '../node_modules/angular/angular.js'),
            path.resolve(__dirname, '../node_modules/angular-aria/angular-aria.js'),
            path.resolve(__dirname, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
            path.resolve(__dirname, '../node_modules/@microfocus/ias-icons/dist/font**/*'),
            path.resolve(__dirname, '../node_modules/@microfocus/ias-icons/dist/ias-icons.css'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.css'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.js')
        ],
        vendorProduction: [
            path.resolve(__dirname, '../node_modules/angular/angular.js'),
            path.resolve(__dirname, '../node_modules/angular-aria/angular-aria.js'),
            path.resolve(__dirname, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
            path.resolve(__dirname, '../node_modules/@microfocus/ias-icons/dist/font**/*'),
            path.resolve(__dirname, '../node_modules/@microfocus/ias-icons/dist/ias-icons.css'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.css'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.js')
        ],
        vendorTest: [
            path.resolve(__dirname, '../node_modules/angular/angular.js'),
            path.resolve(__dirname, '../node_modules/angular-aria/angular-aria.js'),
            path.resolve(__dirname, '../node_modules/angular-mocks/angular-mocks.js'),
            path.resolve(__dirname, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.js')
        ]
    },
    productionServer: {
        root: [
            path.resolve(__dirname, '../dist')
        ]
    }
});
