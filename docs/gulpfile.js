var gulp = require('gulp');
var ngGulp = require('ng-gulp');
var path = require('path');

function exclude(path) {
    return '!' + path;
}

ngGulp(gulp, {
    devServer: {
        root: [
            path.resolve(__dirname, '../dist'),
            path.resolve(__dirname, '../dist/docs')
        ]
    },
    directories: {
        nodeModules: path.resolve(__dirname, '../node_modules'),
        output: path.resolve(__dirname, '../dist/docs'),
        outputImages: path.resolve(__dirname, '../dist/docs/images'),
        outputVendor: path.resolve(__dirname, '../dist/docs/vendor')
    },
    externals: {
        'angular-ui-router': 'window["angular-ui-router"]',
        'ng-prism': 'window["ng-prism"]'
    },
    files: {
        indexProduction: 'src/index.production.html',
        vendorDevelopment: [
            path.resolve(__dirname, '../node_modules/angular/angular.js'),
            path.resolve(__dirname, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
            path.resolve(__dirname, '../node_modules/@microfocus/ias-icons/dist/**/*'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.css'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.js'),
            exclude(path.resolve(__dirname, '../node_modules/@microfocus/ias-icons/dist/docs/**/*')),
            exclude(path.resolve(__dirname, '../node_modules/@microfocus/ias-icons/dist/ias-icons.js')),
            exclude(path.resolve(__dirname, '../node_modules/@microfocus/ias-icons/dist/ias-icons.min.css'))
        ],
        vendorProduction: [
            path.resolve(__dirname, '../node_modules/angular/angular.js'),
            path.resolve(__dirname, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
            path.resolve(__dirname, '../node_modules/@microfocus/ias-icons/dist/**/*'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.css'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.js'),
            exclude(path.resolve(__dirname, '../node_modules/@microfocus/ias-icons/dist/docs/**/*')),
            exclude(path.resolve(__dirname, '../node_modules/@microfocus/ias-icons/dist/ias-icons.js')),
            exclude(path.resolve(__dirname, '../node_modules/@microfocus/ias-icons/dist/ias-icons.min.css'))
        ],
        vendorTest: [
            path.resolve(__dirname, '../node_modules/angular/angular.js'),
            path.resolve(__dirname, '../node_modules/angular-mocks/angular-mocks.js'),
            path.resolve(__dirname, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.js')
        ]
    },
    productionServer: {
        root: [
            path.resolve(__dirname, '../dist'),
            path.resolve(__dirname, '../dist/docs')
        ]
    }
});