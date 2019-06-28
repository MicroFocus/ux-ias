/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular_1 = __webpack_require__(1);
	var config_1 = __webpack_require__(2);
	var routes_1 = __webpack_require__(3);
	var application_component_1 = __webpack_require__(4);
	var components_component_1 = __webpack_require__(7);
	var project_component_1 = __webpack_require__(9);
	var accordion_control_component_1 = __webpack_require__(11);
	var app_bar_component_1 = __webpack_require__(13);
	var button_component_1 = __webpack_require__(15);
	var colors_component_1 = __webpack_require__(17);
	var demo_content_component_1 = __webpack_require__(19);
	var dialog_component_1 = __webpack_require__(21);
	var form_field_component_1 = __webpack_require__(23);
	var form_validation_component_1 = __webpack_require__(25);
	var icon_component_1 = __webpack_require__(27);
	var link_component_1 = __webpack_require__(29);
	var list_component_1 = __webpack_require__(31);
	var menu_component_1 = __webpack_require__(33);
	var nav_component_1 = __webpack_require__(35);
	var panel_component_1 = __webpack_require__(37);
	var side_nav_component_1 = __webpack_require__(39);
	var side_nav_component_2 = __webpack_require__(41);
	var tab_component_1 = __webpack_require__(43);
	var table_component_1 = __webpack_require__(45);
	var tile_component_1 = __webpack_require__(47);
	var tile_grid_component_1 = __webpack_require__(49);
	var toggle_directive_1 = __webpack_require__(51);
	var toggle_service_1 = __webpack_require__(52);
	var multi_valued_input_component_1 = __webpack_require__(53);
	var tags_component_1 = __webpack_require__(55);
	var datepicker_component_1 = __webpack_require__(57);
	var dual_column_component_1 = __webpack_require__(59);
	var comment_component_1 = __webpack_require__(61);
	var status_messages_component_1 = __webpack_require__(63);
	var header_component_1 = __webpack_require__(65);
	angular_1.module('app', [
	    'ngAria',
	    'ng-prism',
	    'ui.router'
	])
	    .config(routes_1.default)
	    .constant('config', config_1.default)
	    .component('application', application_component_1.default)
	    .component('components', components_component_1.default)
	    .component('project', project_component_1.default)
	    .component('accordionControlDocumentation', accordion_control_component_1.default)
	    .component('appBarDocumentation', app_bar_component_1.default)
	    .component('buttonDocumentation', button_component_1.default)
	    .component('colorsDocumentation', colors_component_1.default)
	    .component('commentDocumentation', comment_component_1.default)
	    .component('datepickerDocumentation', datepicker_component_1.default)
	    .component('demoContent', demo_content_component_1.default)
	    .component('dialogDocumentation', dialog_component_1.default)
	    .component('dualColumnDocumentation', dual_column_component_1.default)
	    .component('formFieldDocumentation', form_field_component_1.default)
	    .component('formValidationDocumentation', form_validation_component_1.default)
	    .component('headerDocumentation', header_component_1.default)
	    .component('iasSideNav', side_nav_component_2.default)
	    .component('iconDocumentation', icon_component_1.default)
	    .component('linkDocumentation', link_component_1.default)
	    .component('listDocumentation', list_component_1.default)
	    .component('menuDocumentation', menu_component_1.default)
	    .component('multiValuedInputDocumentation', multi_valued_input_component_1.default)
	    .component('navDocumentation', nav_component_1.default)
	    .component('panelDocumentation', panel_component_1.default)
	    .component('sideNavDocumentation', side_nav_component_1.default)
	    .component('statusMessagesDocumentation', status_messages_component_1.default)
	    .component('tabDocumentation', tab_component_1.default)
	    .component('tagsDocumentation', tags_component_1.default)
	    .component('tableDocumentation', table_component_1.default)
	    .component('tileDocumentation', tile_component_1.default)
	    .component('tileGridDocumentation', tile_grid_component_1.default)
	    .directive('iasToggle', toggle_directive_1.ToggleDirective)
	    .service('IasToggleService', toggle_service_1.default)
	    .run(['$transitions', 'IasToggleService',
	    function ($transitions, toggleService) {
	        $transitions.onStart({
	            to: 'app.component.**',
	            from: 'app.component.**'
	        }, function () {
	            toggleService.hideComponent('componentSideNav');
	            document.getElementsByClassName('components-body')[0].scrollTop = 0;
	        });
	    }
	]);
	angular_1.bootstrap(document, ['app']);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = angular;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    companyName: 'Micro Focus',
	    projectName: 'ux-ias',
	    teamName: 'Micro Focus Identity, Access, and Security Group'
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	routes.$inject = ['$stateProvider', '$urlRouterProvider'];
	function routes($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('/');
	    $stateProvider
	        .state('app', { url: '/?dir&theme', abstract: true, component: 'application' })
	        .state('app.project', { url: '', component: 'project' })
	        .state('app.component', { url: 'component/', abstract: true, component: 'components' })
	        .state('app.component.accordionControl', {
	        url: 'accordion-control',
	        component: 'accordionControlDocumentation'
	    })
	        .state('app.component.appBar', { url: 'app-bar', component: 'appBarDocumentation' })
	        .state('app.component.button', { url: 'button', component: 'buttonDocumentation' })
	        .state('app.component.colors', { url: 'colors', component: 'colorsDocumentation' })
	        .state('app.component.comment', { url: 'comment', component: 'commentDocumentation' })
	        .state('app.component.datepicker', { url: 'datepicker', component: 'datepickerDocumentation' })
	        .state('app.component.dualColumn', { url: 'dual-column', component: 'dualColumnDocumentation' })
	        .state('app.component.dialog', { url: 'dialog', component: 'dialogDocumentation' })
	        .state('app.component.formField', { url: 'form-field', component: 'formFieldDocumentation' })
	        .state('app.component.formValidation', { url: 'form-validation', component: 'formValidationDocumentation' })
	        .state('app.component.header', { url: 'header', component: 'headerDocumentation' })
	        .state('app.component.icon', { url: 'icon', component: 'iconDocumentation' })
	        .state('app.component.link', { url: 'link', component: 'linkDocumentation' })
	        .state('app.component.list', { url: 'list', component: 'listDocumentation' })
	        .state('app.component.menu', { url: 'menu', component: 'menuDocumentation' })
	        .state('app.component.multiValuedInput', {
	        url: 'multi-valued-input',
	        component: 'multiValuedInputDocumentation'
	    })
	        .state('app.component.nav', { url: 'nav', component: 'navDocumentation' })
	        .state('app.component.page', { url: 'page', component: 'pageDocumentation' })
	        .state('app.component.panel', { url: 'panel', component: 'panelDocumentation' })
	        .state('app.component.sideNav', { url: 'side-nav', component: 'sideNavDocumentation' })
	        .state('app.component.statusMessages', { url: 'status-messages', component: 'statusMessagesDocumentation' })
	        .state('app.component.tab', { url: 'tab', component: 'tabDocumentation' })
	        .state('app.component.tags', { url: 'tags', component: 'tagsDocumentation' })
	        .state('app.component.table', { url: 'table', component: 'tableDocumentation' })
	        .state('app.component.tile', { url: 'tile', component: 'tileDocumentation' })
	        .state('app.component.tileGrid', { url: 'tile-grid', component: 'tileGridDocumentation' });
	}
	exports.default = routes;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var ApplicationComponent = (function () {
	    function ApplicationComponent($document, $state, $stateParams, config) {
	        this.$document = $document;
	        this.$state = $state;
	        this.$stateParams = $stateParams;
	        this.projectName = config.projectName;
	    }
	    ApplicationComponent.prototype.$onInit = function () {
	        this.themeLink = this.$document[0].querySelector('#theme-link');
	        this.setDisplayDirection(this.$stateParams['dir']);
	        this.setTheme(this.$stateParams['theme']);
	    };
	    ;
	    ApplicationComponent.prototype.goToComponentsView = function ($event) {
	        $event.preventDefault();
	        this.$state.go('app.component.appBar');
	    };
	    ;
	    ApplicationComponent.prototype.isComponentsView = function () {
	        return /^app.component/.test(this.$state.current.name);
	    };
	    ApplicationComponent.prototype.setDisplayDirection = function (direction) {
	        this.displayDirection = direction || 'ltr';
	        this.$document.find('body').attr('dir', this.displayDirection);
	    };
	    ;
	    ApplicationComponent.prototype.setTheme = function (theme) {
	        if (theme) {
	            this.theme = 'ux-ias' + '_' + theme;
	        }
	        else {
	            this.theme = 'ux-ias';
	        }
	        this.themeLink.href = this.themeLink.href.replace(/(\/)([^\/]+)(\.css$)/, '$1' + this.theme + '$3');
	    };
	    ;
	    ApplicationComponent.prototype.toggleDisplayDirection = function () {
	        this.displayDirection = this.displayDirection === 'ltr' ? 'rtl' : 'ltr';
	        this.$state.go('.', { dir: this.displayDirection });
	    };
	    ;
	    ApplicationComponent.prototype.toggleTheme = function () {
	        if (this.isDefaultTheme()) {
	            this.$state.go('.', { theme: 'dark' });
	        }
	        else {
	            this.$state.go('.', { theme: undefined });
	        }
	    };
	    ;
	    ApplicationComponent.prototype.isDefaultTheme = function () {
	        return this.theme === 'ux-ias';
	    };
	    ;
	    return ApplicationComponent;
	}());
	ApplicationComponent.$inject = ['$document', '$state', '$stateParams', 'config'];
	ApplicationComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(6)
	    })
	], ApplicationComponent);
	exports.default = ApplicationComponent;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular = __webpack_require__(1);
	function Component(options) {
	    return function (controller) { return angular.extend(options, { controller: controller }); };
	}
	exports.Component = Component;


/***/ },
/* 6 */
/***/ function(module, exports) {

	var path = 'components/application/application.component.html';
	var html = "<header>\n    <div class=\"ias-app-bar\">\n        <div class=\"ias-avatar\">\n           <img class=\"micro-logo\" src=\"images/IAS_UX_100.png\" alt=\"UX\">\n        </div>\n        <h3 class=\"ias-heading\" ng-bind=\"$ctrl.projectName\"></h3>\n        <span class=\"ias-fill\"></span>\n        <button class=\"ias-button ias-icon-button\"\n                title=\"Toggle display direction\"\n                ng-click=\"$ctrl.toggleDisplayDirection()\"\n                ng-switch=\"$ctrl.displayDirection\">\n            <i class=\"ias-icon ias-icon-back_left_thick\" ng-switch-when=\"ltr\"></i>\n            <i class=\"ias-icon ias-icon-forward_right_thick\" ng-switch-when=\"rtl\"></i>\n        </button>\n        <button class=\"ias-button ias-icon-button\" ng-click=\"$ctrl.toggleTheme()\" title=\"Toggle theme\">\n            <i class=\"ias-icon ias-icon-favorite_outline_thin\" ng-if=\"$ctrl.isDefaultTheme()\"></i>\n            <i class=\"ias-icon ias-icon-favorite_fill\" ng-if=\"!$ctrl.isDefaultTheme()\"></i>\n        </button>\n    </div>\n    <div class=\"ias-nav\">\n        <button id=\"componentsSideNavToggle\" class=\"ias-button ias-icon-button\" ng-if=\"$ctrl.isComponentsView()\" ias-toggle=\"componentSideNav\">\n            <i class=\"ias-icon ias-icon-hamburger_menu_thick\"></i>\n        </button>\n        <a ui-sref=\"app.project\" ui-sref-active=\"ias-active\">Project</a>\n        <a ui-sref=\"app.component\" ui-sref-active=\"ias-active\" ng-click=\"$ctrl.goToComponentsView($event)\">Components</a>\n        <a ui-sref=\"app.layout\" ui-sref-active=\"ias-active\" class=\"ias-disabled\" title=\"Coming soon\">Layout</a>\n        <a ui-sref=\"app.themes\" ui-sref-active=\"ias-active\" class=\"ias-disabled\" title=\"Coming soon\">Themes</a>\n        <a href=\"https://microfocus.github.io/ias-icons\" target=\"_blank\" class=\"ias-button\">Icons</a>\n    </div>\n</header>\n\n<main>\n    <div ui-view></div>\n</main>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var ComponentsComponent = (function () {
	    function ComponentsComponent() {
	    }
	    return ComponentsComponent;
	}());
	ComponentsComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(8)
	    })
	], ComponentsComponent);
	exports.default = ComponentsComponent;


/***/ },
/* 8 */
/***/ function(module, exports) {

	var path = 'components/components/components.component.html';
	var html = "<ias-side-nav class=\"ias-side-nav\" name=\"componentSideNav\">\n    <a ui-sref=\"app.component.accordionControl\" ui-sref-active=\"ias-active\">Accordion Control</a>\n    <a ui-sref=\"app.component.appBar\" ui-sref-active=\"ias-active\">App Bar</a>\n    <a ui-sref=\"app.component.button\" ui-sref-active=\"ias-active\">Button</a>\n    <a ui-sref=\"app.component.colors\" ui-sref-active=\"ias-active\">Colors</a>\n    <a ui-sref=\"app.component.comment\" ui-sref-active=\"ias-active\">Comment</a>\n    <a ui-sref=\"app.component.datepicker\" ui-sref-active=\"ias-active\">Datepicker</a>\n    <a ui-sref=\"app.component.dialog\" ui-sref-active=\"ias-active\">Dialog</a>\n    <!--<a ui-sref=\"app.component.dualColumn\" ui-sref-active=\"ias-active\">Dual Column</a>-->\n    <a ui-sref=\"app.component.formField\" ui-sref-active=\"ias-active\">Form Field</a>\n    <a ui-sref=\"app.component.formValidation\" ui-sref-active=\"ias-active\">Form Validation</a>\n    <a ui-sref=\"app.component.header\" ui-sref-active=\"ias-active\">Header</a>\n    <a ui-sref=\"app.component.icon\" ui-sref-active=\"ias-active\">Icon</a>\n    <a ui-sref=\"app.component.link\" ui-sref-active=\"ias-active\">Link</a>\n    <a ui-sref=\"app.component.list\" ui-sref-active=\"ias-active\">List</a>\n    <a ui-sref=\"app.component.menu\" ui-sref-active=\"ias-active\">Menu</a>\n    <!--<a ui-sref=\"app.component.multiValuedInput\" ui-sref-active=\"ias-active\">Multi-valued Input</a>-->\n    <a ui-sref=\"app.component.nav\" ui-sref-active=\"ias-active\">Nav</a>\n    <a ui-sref=\"app.component.panel\" ui-sref-active=\"ias-active\">Panel</a>\n    <a ui-sref=\"app.component.sideNav\" ui-sref-active=\"ias-active\">Side Nav</a>\n    <a ui-sref=\"app.component.statusMessages\" ui-sref-active=\"ias-active\">Status Messages</a>\n    <a ui-sref=\"app.component.tab\" ui-sref-active=\"ias-active\">Tab</a>\n    <a ui-sref=\"app.component.table\" ui-sref-active=\"ias-active\">Table</a>\n    <a ui-sref=\"app.component.tags\" ui-sref-active=\"ias-active\">Tags</a>\n    <a ui-sref=\"app.component.tile\" ui-sref-active=\"ias-active\">Tile</a>\n    <a ui-sref=\"app.component.tileGrid\" ui-sref-active=\"ias-active\">Tile Grid</a>\n</ias-side-nav>\n\n<div class=\"components-body\">\n    <div ui-view class=\"ias-content-padding\"></div>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var ProjectComponent = (function () {
	    function ProjectComponent(config) {
	        this.projectName = config.projectName;
	        this.teamName = config.teamName;
	    }
	    return ProjectComponent;
	}());
	ProjectComponent.$inject = ['config'];
	ProjectComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(10)
	    })
	], ProjectComponent);
	exports.default = ProjectComponent;


/***/ },
/* 10 */
/***/ function(module, exports) {

	var path = 'components/project/project.component.html';
	var html = "<div class=\"ias-content-padding\">\n    <section id=\"introduction\">\n        <h1 ng-bind=\"$ctrl.projectName\"></h1>\n        <p>\n            UX Library for Identity, Access, and Security Products (<span ng-bind=\"$ctrl.projectName\"></span>) is the\n            official CSS framework for web applications built by Micro Focus Identity, Access, and Security Group.\n            These guidelines help establish a consistent look and feel among common user interface elements throughout\n            Identity Access, and Security products. This documentation contains information about components, user\n            experience (UX) patterns, and application layout. It also contains the required structure and options\n            for the HTML that uses this framework.\n        </p>\n        <p>\n            This is only a CSS framework. Interactive components shown in this framework are not functional (they can\n            only be viewed). Please refer to <a href=\"https://github.com/microfocus/ng-ias\">ng-ias</a> to view a fully\n            functional implementation of these components.\n    </section>\n\n    <section id=\"installation\">\n        <h2>Installation</h2>\n\n        <section>\n            <h3>Manual Installation</h3>\n            <p>\n                Download <a href=\"./ux-ias.css\" target=\"_blank\">ux-ias.css</a>.\n                If you are using <a href=\"https://github.com/microfocus/ias-icons\" target=\"_blank\">ias-icons</a>,\n                add <a href=\"https://microfocus.github.io/ias-icons/ias-icons.css\" target=\"_blank\">ias-icons.css</a>\n                and the ias-icons\n                <a href=\"https://github.com/microfocus/ias-icons/tree/gh-pages/fonts\" target=\"_blank\">fonts\n                    directory</a> as well. Add the stylesheets to your HTML page:\n            </p>\n            <pre><code highlight=\"markup\">\n                &lt;link rel=\"stylesheet\" href=\"ux-ias.css\" /&gt;\n                &lt;link rel=\"stylesheet\" href=\"ias-icons.css\" /&gt;\n            </code></pre>\n        </section>\n\n        <section>\n            <h3>NPM</h3>\n            <pre><code highlight=\"clike\">\n                npm install --save --save-exact git@github.com:microfocus/ux-ias\n            </code></pre>\n        </section>\n    </section>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var AccordionControlComponent = (function () {
	    function AccordionControlComponent() {
	    }
	    return AccordionControlComponent;
	}());
	AccordionControlComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(12)
	    })
	], AccordionControlComponent);
	exports.default = AccordionControlComponent;


/***/ },
/* 12 */
/***/ function(module, exports) {

	var path = 'components/docs/accordion-control/accordion-control.component.html';
	var html = "<h1 class=\"ias-page-title\">\n    Accordion Control\n</h1>\n\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n    The Accordion Control is a container for information that uses a short descriptive title bar to describe the\n    information inside. The user can expand or collapse this information by clicking anywhere within the title bar. A\n    properly implemented accordion component offers the user the ability to navigate large amounts of content with ease.\n</p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n    To save screen space by hiding and showing information held behind a descriptive title bar.\n</p>\n\n<h2>Examples</h2>\n<section>\n    <h3>Closed</h3>\n\n    <div class=\"ias-accordion-group\" toggle-repeat-code>\n        <div class=\"ias-accordion\">\n            <div class=\"ias-accordion-header\">\n                <div class=\"ias-accordion-title\">Personal Information</div>\n                <span class=\"ias-fill\"></span>\n                <i class=\"ias-icon ias-icon-down_thin ias-accordion-icon-toggle\"></i>\n            </div>\n            <div class=\"ias-accordion-content\">\n                Lorem ipsum dolor sit amet...\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>Open</h3>\n\n    <div class=\"ias-accordion-group\" toggle-repeat-code>\n        <div class=\"ias-accordion ias-open\">\n            <div class=\"ias-accordion-header\">\n                <div class=\"ias-accordion-title\">Personal Information</div>\n                <span class=\"ias-fill\"></span>\n                <i class=\"ias-icon ias-icon-up_thin ias-accordion-icon-toggle\"></i>\n            </div>\n            <div class=\"ias-accordion-content\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar\n                lorem nec dolor ultrices laoreet. Sed ullamcorper auctor justo, vel\n                laoreet sapien iaculis id. Ut vel augue ornare, cursus ex eget, convallis\n                ipsum.\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>With icons</h3>\n\n    <div class=\"ias-accordion-group\" toggle-repeat-code>\n        <div class=\"ias-accordion\">\n            <div class=\"ias-accordion-header\">\n                <div class=\"ias-accordion-title\">\n                    Personal Information\n                    <i class=\"ias-icon ias-icon-message_error_thick ias-error\"></i>\n                </div>\n                <span class=\"ias-fill\"></span>\n                <i class=\"ias-icon ias-icon-down_thin ias-accordion-icon-toggle\"></i>\n            </div>\n            <div class=\"ias-accordion-content\">\n                Lorem ipsum dolor sit amet...\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>Group</h3>\n\n    <div class=\"ias-accordion-group\" toggle-repeat-code>\n        <div class=\"ias-accordion-link\">\n            <a ui-sref=\"app.component.accordionControl\">Close All</a>\n        </div>\n        <div class=\"ias-accordion\">\n            <div class=\"ias-accordion-header\">\n                <div class=\"ias-accordion-title\">Personal Information</div>\n                <span class=\"ias-fill\"></span>\n                <i class=\"ias-icon ias-icon-down_thin ias-accordion-icon-toggle\"></i>\n            </div>\n            <div class=\"ias-accordion-content\">\n                Lorem ipsum dolor sit amet...\n            </div>\n        </div>\n        <div class=\"ias-accordion ias-open\">\n            <div class=\"ias-accordion-header\">\n                <div class=\"ias-accordion-title\">Account Settings</div>\n                <span class=\"ias-fill\"></span>\n                <i class=\"ias-icon ias-icon-up_thin ias-accordion-icon-toggle\"></i>\n            </div>\n            <div class=\"ias-accordion-content\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar\n                lorem nec dolor ultrices laoreet. Sed ullamcorper auctor justo, vel\n                laoreet sapien iaculis id. Ut vel augue ornare, cursus ex eget, convallis\n                ipsum.\n            </div>\n        </div>\n        <div class=\"ias-accordion\">\n            <div class=\"ias-accordion-header\">\n                <div class=\"ias-accordion-title\">Preferences</div>\n                <span class=\"ias-fill\"></span>\n                <i class=\"ias-icon ias-icon-down_thin ias-accordion-icon-toggle\"></i>\n            </div>\n            <div class=\"ias-accordion-content\">\n                Lorem ipsum dolor sit amet...\n            </div>\n        </div>\n    </div>\n</section>\n\n<h2>Appearance</h2>\n\n<h3>Accordion Control Specifics</h3>\n    <h5>Implementation</h5>\n        <ul>\n            <li>Each accordion has a descriptive title bar and an action icon to indicate the accordion can be collapsed or\n                expanded.</li>\n            <li>The content section is a container that can implement nearly any component necessary for the application.\n            </li>\n            <li>Accordion groups can optionally use \"Close All\" and \"Open All\" actions to control all accordions within a\n                group.\n            </li>\n            <li>The \"Open All\" action should be used only if all accordions are currently closed, otherwise the \"Close All\"\n                should be displayed.</li>\n            <li>Accordion groups can be implemented to allow only a single accordion open at a time, or more than one.</li>\n        </ul>\n\n    <h5>Common Patterns</h5>\n        <ul>\n            <li>Adding icons next to the .ias-heading element to show important events or necessary actions in a content\n                section.</li>\n            <li>Accordions are similar to a vertical tab that organizes information in a space saving and readable way.</li>\n        </ul>\n\n<h3>Nestable Components</h3>\n    <h5>Content Section</h5>\n    <p class=\"ias-page-instructions\">\n        Accordions can make use of a large number of nestable components within their content section.  Input fields,\n        dialogue boxes, lists, or any element that is necessary for accomplishing the goal of the accordion can likely be\n        used.\n    </p>\n\n    <h5>Title Bar</h5>\n    <ul>\n        <li>ias.header</li>\n        <li>ias.icon</li>\n        <li>&lt;span&gt; with .ias-fill for spacing</li>\n    </ul>\n\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var AppBarComponent = (function () {
	    function AppBarComponent() {
	    }
	    return AppBarComponent;
	}());
	AppBarComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(14)
	    })
	], AppBarComponent);
	exports.default = AppBarComponent;


/***/ },
/* 14 */
/***/ function(module, exports) {

	var path = 'components/docs/app-bar/app-bar.component.html';
	var html = "<h1 class=\"ias-page-title\">\n    App Bar\n</h1>\n\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n    The App Bar is the first component of an page that establishes the Micro Focus UX branding. The default\n    example below details the attributes that define it. Consistent implementation of all the attributes will help in\n    establishing the Micro Focus UX brand image.\n</p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n    Provide consistent information about product naming, branding, user settings/actions, and managing user state\n    throughout the application.\n</p>\n\n<h2>Examples</h2>\n\n<h3>Micro Focus Default Branding</h3>\n<section>\n    <div class=\"ias-app-bar\" toggle-repeat-code>\n        <div class=\"ias-avatar\">\n           <img class=\"micro-logo\" src=\"images/IAS_AM_100.png\">\n        </div>\n        <h3 class=\"ias-heading\">Access Manager</h3>\n        <span class=\"ias-fill\"></span>\n        <button type=\"button\" class=\"ias-button ias-menu-toggle\">\n            <span>Jonathan Smithsonian</span><i class=\"ias-icon ias-icon-down_thick\"></i>\n        </button>\n    </div>\n</section>\n\n<h3>App Bar without Branding or Logo Image</h3>\n<section>\n    <div class=\"ias-app-bar\" toggle-repeat-code>\n        <h3 class=\"ias-heading\">Application Title</h3>\n        <span class=\"ias-fill\"></span>\n        <button type=\"button\" class=\"ias-button ias-menu-toggle\">\n            <span>Jonathan Smithsonian</span><i class=\"ias-icon ias-icon-down_thick\"></i>\n        </button>\n    </div>\n</section>\n\n<h3>App Bar with an Image Larger than Maximum Height</h3>\n<section>\n    <div class=\"ias-app-bar ias-linear-gradient\" toggle-repeat-code>\n        <div class=\"ias-avatar\">\n            <img src=\"images/branding/brand_01.png\"\n                 alt=\"\">\n        </div>\n        <h3 class=\"ias-heading\">Application Title</h3>\n        <span class=\"ias-fill\"></span>\n        <button type=\"button\" class=\"ias-button ias-menu-toggle\">\n            <span>Jonathan Smithsonian</span><i class=\"ias-icon ias-icon-down_thick\"></i>\n        </button>\n    </div>\n</section>\n\n<h3>App Bar using a Logo Image</h3>\n<section>\n    <div class=\"ias-app-bar\" toggle-repeat-code style=\"background: linear-gradient(to right, yellow, green)\">\n        <div class=\"ias-avatar\">\n            <img src=\"images/branding/brand_02.png\"\n                 alt=\"\">\n        </div>\n        <h3 class=\"ias-heading\">Application Title</h3>\n        <span class=\"ias-fill\"></span>\n        <button type=\"button\" class=\"ias-button ias-menu-toggle\">\n            <span>Jonathan Smithsonian</span><i class=\"ias-icon ias-icon-down_thick\"></i>\n        </button>\n    </div>\n</section>\n\n<h3>App Bar with Image Smaller than Minimum Height</h3>\n<section>\n    <div class=\"ias-app-bar\" toggle-repeat-code style=\"background: linear-gradient(to right, lightgray, gray)\">\n        <div class=\"ias-avatar\">\n            <img src=\"images/branding/brand_03.jpg\"\n                 alt=\"\">\n        </div>\n        <h3 class=\"ias-heading\" style=\"color: #1f1f1f\">Application Title</h3>\n        <span class=\"ias-fill\"></span>\n        <button type=\"button\" class=\"ias-button ias-menu-toggle\" style=\"color: #1f1f1f\">\n            <span>Jonathan Smithsonian</span><i class=\"ias-icon ias-icon-down_thick\"></i>\n        </button>\n    </div>\n</section>\n\n<h2>Appearance</h2>\n\n\n\n<h3>App Bar Specifics</h3>\n    <h5>Implementation</h5>\n    <ul>\n        <li>Use an edge-to-edge implementation that doesn't offer space or margins on the top or sides.</li>\n        <li>Default color background is a solid implementation of the primary Micro Focus blue, (#0073e7).</li>\n        <li>App Bars can make use of a transitional color gradient as seen in the \"Larger than Max Height\" example above.\n        </li>\n    </ul>\n\n    <h5>Sizing</h5>\n    <ul>\n        <li>Minimum height is 45px while the maximum height is 100px.</li>\n        <li>An App Bar without a logo will be set to 45px, while one with an image larger than the max height will be set to\n            100px.</li>\n        <li>An App bar with a logo height less than 45px will be centered vertically within the App Bar.</li>\n    </ul>\n\n    <h5>App Bar Elements</h5>\n    <ul>\n        <li>When present, the user account actions menu appears on the right hand side.</li>\n        <li>Title and user menu are vertically center-aligned.</li>\n        <li>A logo or branding image inside the app bar has an edge-to-edge design</li>\n    </ul>\n\n    <h5>Common patterns</h5>\n    <ul>\n        <li>Always use an edge-to-edge implementation at the application scope. Do not nest the app bar within other\n            elements.</li>\n        <li>The app bar is often coupled with a navigation bar underneath, allowing users to access important elements\n            from anywhere within the application.</li>\n        <li>When implemented, the user account menu is positioned on right side allowing users to quickly access\n            settings and actions.</li>\n        <li>A notification icon may be implemented next to the user account settings to notify the user,\n            (using .ias-icon-button>i.ias-icon-bell_thick).</li>\n    </ul>\n<h3>Nestable components</h3>\n<p class=\"ias-page-instructions\">Specific information for each nestable component can be found in their\n    individual sections.</p>\n    <ul>\n        <li>Buttons .ias-button</li>\n        <li>Headings .ias-header</li>\n        <li>Images &lt;img&gt;</li>\n        <li>Menus .ias-menu</li>\n        <li>Spans &lt;span&gt;</li>\n    </ul>\n\n<h3>Responsive Displays</h3>\n<p class=\"ias-page-instructions\">\n        When transitioning to a smaller display the app bar will become smaller as well. When this happens, the minimum\n        height and side padding are reduced to prevent text and element wrapping.\n</p>\n<p class=\"ias-page-instructions\">\n        If the app bar elements encounter overflow due to size constraints, the app title will be adjusted to\n        accommodate for lack of space.  Ellipsis are appended to the title and display preference is given to user\n        account menu and the icon.\n</p>\n\n<h3>Background Color</h3>\n    <ul>\n        <li>A solid color background is the default setting for the app bar and uses the Micro Focus blue.</li>\n        <li>The background color may be changed as needed by the customer for their implementation of the product.</li>\n        <li>The background color may also use a transitional style between two colors, as seen in the third example.\n        </li>\n    </ul>\n\n<h3>Branding</h3>\n    <ul>\n        <li>The product will be distributed with the default Micro Focus branding seen in the first example above.</li>\n        <li>Default Micro Focus branding consist of having: Icon image, product title, and user account\n            menu. Text is displayed in white.</li>\n        <li>Customers will be able to adjust the branding to fit their personal needs, (colors, images, etc).</li>\n    </ul>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var ButtonComponent = (function () {
	    function ButtonComponent() {
	    }
	    return ButtonComponent;
	}());
	ButtonComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(16)
	    })
	], ButtonComponent);
	exports.default = ButtonComponent;


/***/ },
/* 16 */
/***/ function(module, exports) {

	var path = 'components/docs/button/button.component.html';
	var html = "<h1 class=\"ias-page-title\">Button</h1>\n\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n\tButtons are a component that universally communicate the ability for a user to interact with an application.\n\tA button's purpose can be expressed through text, color, or a general icon that's meaning is widely understood.\n\tButtons are often grouped together with other buttons whose purposes relate to each other.\n</p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n\tButtons are used to provide action, navigation, and closure elements to a page.\n</p>\n\n<h2>Examples</h2>\n<section>\n\t<h3>Text Button</h3>\n\n\t<div toggle-repeat-code=\"inner\">\n\t\t<button type=\"button\" class=\"ias-button\">Button</button>\n\t\t<div class=\"ias-button\" tabindex=\"0\">CSS Class</div>\n\t\t<a class=\"ias-button\" ui-sref=\"app.component.button\">Anchor</a>\n\t</div>\n</section>\n\n<section>\n\t<h3>Disabled Text Button</h3>\n\n\t<div toggle-repeat-code=\"inner\">\n\t\t<button type=\"button\" class=\"ias-button\" disabled>Button</button>\n\t\t<div class=\"ias-button ias-disabled\" tabindex=\"-1\">CSS Class</div>\n\t</div>\n</section>\n\n<section>\n\t<h3>Special Text Button</h3>\n\t<div toggle-repeat-code=\"inner\">\n\t\t<button type=\"button\" class=\"ias-button ias-cta\">Button</button>\n\t\t<button type=\"button\" class=\"ias-button ias-cta\" disabled=\"\">Disabled Button</button>\n\t</div>\n</section>\n\n<section>\n\t<h3>Icon Button</h3>\n    <div toggle-repeat-code=\"inner\">\n        <button class=\"ias-button ias-icon-button\" type=\"button\" title=\"Check\">\n            <i class=\"ias-icon ias-icon-check_thick\"></i>\n        </button>\n        <button class=\"ias-button ias-icon-button\" type=\"button\" title=\"Close\">\n            <i class=\"ias-icon ias-icon-close_thick\"></i>\n        </button>\n        <button class=\"ias-button ias-icon-button\" type=\"button\" disabled=\"\">\n            <i class=\"ias-icon ias-icon-new_thick\"></i>\n        </button>\n    </div>\n</section>\n\n<section>\n\t<h3>Special Icon Button</h3>\n\t<div toggle-repeat-code=\"inner\">\n\t\t<button class=\"ias-button ias-icon-button ias-cta\" type=\"button\" title=\"Check\">\n\t\t\t<i class=\"ias-icon ias-icon-check_thick\"></i>\n\t\t</button>\n\t\t<button class=\"ias-button ias-icon-button ias-cta\" type=\"button\" disabled=\"\">\n\t\t\t<i class=\"ias-icon ias-icon-new_thick\"></i>\n\t\t</button>\n\t</div>\n</section>\n\n<section>\n\t<h3>Icons Used with Text</h3>\n\n\t<div toggle-repeat-code=\"inner\">\n\t\t<button type=\"button\" class=\"ias-button ias-menu-toggle\">\n\t\t\t<span>Menu Toggle</span>\n\t\t\t<i class=\"ias-icon ias-icon-down_thick\"></i>\n\t\t</button>\n\t\t<button type=\"button\" class=\"ias-button ias-icon-text-button\">\n\t\t\t<i class=\"ias-icon ias-icon-search_thick\"></i>\n\t\t\t<span>John Smithsonian</span>\n\t\t</button>\n\t</div>\n</section>\n\n<section>\n\t<h3>Selected Icon Button</h3>\n\n\t<div toggle-repeat-code=\"inner\">\n\t\t<button class=\"ias-button ias-icon-button ias-selected\" type=\"button\" disabled=\"\">\n\t\t\t<i class=\"ias-icon ias-icon-view_list_thin\"></i>\n\t\t</button>\n\t\t<button class=\"ias-button ias-icon-button\" type=\"button\">\n\t\t\t<i class=\"ias-icon ias-icon-view_tile_thin\"></i>\n\t\t</button>\n\t\t<button class=\"ias-button ias-icon-button\" type=\"button\">\n\t\t\t<i class=\"ias-icon ias-icon-orgchart_thin\"></i>\n\t\t</button>\n\t</div>\n</section>\n\n<h2>Appearance</h2>\n<h3>Button Specifics</h3>\n    <h5>Implementation</h5>\n    <ul>\n        <li>Disabled buttons will appear as opaque and will not have a hover effect.</li>\n        <li>Special buttons emphasize an action within the context of a page; limit the use of special buttons to one\n            per page.</li>\n        <li>Icon buttons will appear as only the icon until they are hovered over by the user.</li>\n        <li>Each icon button should have a short title attribute to explain the button upon hovering.</li>\n        <li>Icons nested within text buttons but should be the exception, doing so is primarily done to display state.\n        </li>\n        <li>Grouped icon buttons can display a selected button. The selected icon will be highlighted and disabled to\n            signal it is the present state.</li>\n    </ul>\n\n    <h5>Sizing</h5>\n    <ul>\n        <li>Buttons have a minimum width of 70px.</li>\n        <li>Buttons will grow to fit the size of button text.</li>\n        <li>Buttons will not adjust their width as screen size becomes smaller.</li>\n    </ul>\n\n    <h5>States</h5>\n    <ul>\n        <li>Hover: Highlights the button and changes the cursor to indicate the button can be clicked. Displays a title\n            attribute if it is an icon button.</li>\n        <li>Disabled: Button becomes opaque in color and hovering does not change its appearance. Indicates an unusable\n            button.</li>\n        <li>Focus: The button has been selected through tab support. Creates a outline around the button.</li>\n    </ul>\n\n    <h5>Common Patterns</h5>\n    <ul>\n        <li>Buttons convey interactivity to a user with action, navigation, or closure elements.</li>\n        <li>Buttons may effect progression by being inactive until other conditions are met.</li>\n        <li>Associated buttons should be grouped together, such as back and next navigation or available page views.</li>\n\n    </ul>\n\n<h3>Nesting</h3>\n\n<h5>Nestable Components</h5>\n<ul>\n\t<li>.ias-icon</li>\n\t<li>anchors &lt;a&gt;</li>\n</ul>\n\n<h5>Nesting Buttons in other Components</h5>\n<p class=\"ias-page-instructions\">\n\tButtons can be nested into most other elements. If an elements goal can be accomplished by nesting a button inside,\n    it's likely that it can be done. The documentation will detail instances where buttons are implemented in other\n    components.\n</p>\n    <ul>\n        <li>Buttons should never be nested within other buttons.</li>\n    </ul>\n\n\n\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var ColorsComponent = (function () {
	    function ColorsComponent() {
	    }
	    return ColorsComponent;
	}());
	ColorsComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(18)
	    })
	], ColorsComponent);
	exports.default = ColorsComponent;


/***/ },
/* 18 */
/***/ function(module, exports) {

	var path = 'components/docs/colors/colors.component.html';
	var html = "<h1>Colors</h1>\n\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n\tMicro Focus makes use of a unified color palette to create a consistent brand image across its products. The primary\n\tcolor palette is detailed below along with sets of individual colors.  Each color is coupled with its variable\n\tname as well as its color code.\n</p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n\tEstablish consistent and unified color usage throughout the UI and include standard corporate colors from the\n\tMicro Focus branding guidelines.\n</p>\n\n<h2>Examples</h2>\n\n<h3>Micro Focus Primary Color Palette</h3>\n<div><img src=\"images/MF_colors_IAS.png\" alt=\"\" style=\"border: 1px solid #dae1e1\"></div>\n<p class=\"ias-page-instructions\">\n\tThis is the Micro Focus primary color palette. The Identity and Access product group will use the two highlighted\n\tcolors as their primary product colors. The decision to use these colors from the primary color palette, rather than\n\tthe MF Primary blue, are as follows:\n</p>\n<ul>\n\t<li>These colors are close to the pre-MF Identity and Access branding colors.</li>\n\t<li>These colors are harmonious when used within UI elements.</li>\n\t<li>Feedback from developers and customers that the MF primary blue is too bright.</li>\n</ul>\n\n<h3>Default Micro Focus App Bar Color</h3>\n<div class=\"color-div\">\n\t<div class=\"color-chip\" style=\"background-color: #0073e7; color: #fff;\">#0073e7</div>\n\t<div class=\"color-chip-name\">Micro Focus App Bar Default Blue</div>\n\t<ul>\n\t\t<li>Only used as default Micro Focus app bar color.</li>\n\t\t<li>Not for use within page elements</li>\n\t</ul>\n</div>\n\n<h3>Primary Blue Colors</h3>\n<div class=\"colors-section\">\n\t<div class=\"color-div\">\n\t\t<div class=\"color-chip\" style=\"background-color: #007cd0; color: #fff;\">#007cd0</div>\n\t\t<div class=\"color-chip-name\">Primary Blue ($color-primary-2)</div>\n\t\t<ul>\n\t\t\t<li>Default masthead background blend (right color)</li>\n\t\t\t<li>Button hover text color</li>\n\t\t\t<li>Button hover border</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"color-div colors-column-right\">\n\t\t<div class=\"color-chip\" style=\"background-color: #01a9e7; color: #fff;\">#01a9e7</div>\n\t\t<div class=\"color-chip-name\">Secondary Blue ($color-primary-4)</div>\n\t\t<ul>\n\t\t\t<li>Default masthead background blend (left color)</li>\n\t\t\t<li>Nav bar selected underline</li>\n\t\t\t<li>Tile hover border</li>\n\t\t</ul>\n\t</div>\n</div>\n\n<h3>Primary Gray Colors</h3>\n<div class=\"colors-section\">\n    <div>\n        <div class=\"color-div\">\n            <div class=\"color-chip\" style=\"background-color: #434c50; color: #fff;\">#434c50</div>\n            <div class=\"color-chip-name\">Text Gray ($color-gray-1)</div>\n            <ul>\n                <li>Text and Title</li>\n                <li>Nav bar text</li>\n                <li>Menu background</li>\n            </ul>\n        </div>\n        <div class=\"color-div\">\n            <div class=\"color-chip\" style=\"background-color: #808080; color: #fff;\">#808080</div>\n            <div class=\"color-chip-name\">Label Gray ($color-gray-4)</div>\n            <ul>\n                <li>Label</li>\n                <li>Action icon</li>\n                <li>Dialog title</li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"colors-column-right\">\n        <div class=\"color-div\">\n            <div class=\"color-chip\" style=\"background-color: #dae1e1;\">#dae1e1</div>\n            <div class=\"color-chip-name\">Line Gray ($color-gray-5)</div>\n            <ul>\n                <li>Nav bar hover</li>\n                <li>Button border</li>\n                <li>Separator line</li>\n            </ul>\n        </div>\n\n        <div class=\"color-div\">\n            <div class=\"color-chip\" style=\"background-color: #eef2f2;\">#eef2f2</div>\n            <div class=\"color-chip-name\">Tile Gray ($color-gray-6)</div>\n            <ul>\n                <li>Tile background</li>\n                <li>Panel background</li>\n                <li>Nav bar background</li>\n            </ul>\n        </div>\n    </div>\n</div>\n\n<h3>Blue Colors</h3>\n<div class=\"colors-section\">\n\t<div>\n\t\t<div class=\"color-div\">\n\t\t\t<div class=\"color-chip\" style=\"background-color: #0067ad; color: #fff;\">#0067ad</div>\n\t\t\t<div class=\"color-chip-name\">Dark Blue ($color-primary-1)</div>\n\t\t</div>\n\t\t<div class=\"color-div\">\n\t\t\t<div class=\"color-chip\" style=\"background-color: #007cd0; color: #fff;\">#007cd0</div>\n\t\t\t<div class=\"color-chip-name\">Primary Blue ($color-primary-2)</div>\n\t\t</div>\n\t\t<div class=\"color-div\">\n\t\t\t<div class=\"color-chip\" style=\"background-color: #0090da; color: #fff;\">#0090da</div>\n\t\t\t<div class=\"color-chip-name\">Medium Blue ($color-primary-3)</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"colors-column-right\">\n\t\t<div class=\"color-div\">\n\t\t\t<div class=\"color-chip\" style=\"background-color: #01a9e7; color: #fff;\">#01a9e7</div>\n\t\t\t<div class=\"color-chip-name\">Secondary Blue ($color-primary-4)</div>\n\t\t</div>\n\t\t<div class=\"color-div\">\n\t\t\t<div class=\"color-chip\" style=\"background-color: #29ceff; color: #fff;\">#29ceff</div>\n\t\t\t<div class=\"color-chip-name\">Light Blue ($color-primary-5)</div>\n\t\t</div>\n\t</div>\n</div>\n\n<h3>Gray Colors</h3>\n<div class=\"colors-section\">\n\t<div>\n\t\t<div class=\"color-div\">\n\t\t\t<div class=\"color-chip\" style=\"background-color: #434c50; color: #fff;\">#434c50</div>\n\t\t\t<div class=\"color-chip-name\">Text Gray ($color-gray-1)</div>\n\t\t</div>\n\t\t<div class=\"color-div\">\n\t\t\t<div class=\"color-chip\" style=\"background-color: #575b5d; color: #fff;\">#575b5d</div>\n\t\t\t<div class=\"color-chip-name\">$color-gray-2</div>\n\t\t</div>\n\t\t<div class=\"color-div\">\n\t\t\t<div class=\"color-chip\" style=\"background-color: #6a6f71; color: #fff;\">#6a6f71</div>\n\t\t\t<div class=\"color-chip-name\">$color-gray-3</div>\n\t\t</div>\n\t\t<div class=\"color-div\">\n\t\t\t<div class=\"color-chip\" style=\"background-color: #808080; color: #fff;\">#808080</div>\n\t\t\t<div class=\"color-chip-name\">Label Gray ($color-gray-4)</div>\n\t\t</div>\n\t</div>\n\t<div class=\"colors-column-right\">\n\t\t<div class=\"color-div\">\n\t\t\t<div class=\"color-chip\" style=\"background-color: #dae1e1;\">#dae1e1</div>\n\t\t\t<div class=\"color-chip-name\">Line Gray ($color-gray-5)</div>\n\t\t</div>\n\t\t<div class=\"color-div\">\n\t\t\t<div class=\"color-chip\" style=\"background-color: #eef2f2;\">#eef2f2</div>\n\t\t\t<div class=\"color-chip-name\">Tile Gray ($color-gray-6)</div>\n\t\t</div>\n\t\t<div class=\"color-div\">\n\t\t\t<div class=\"color-chip\" style=\"background-color: #f6f9f8;\">#f6f9f8</div>\n\t\t\t<div class=\"color-chip-name\">$color-gray-7</div>\n\t\t</div>\n\t</div>\n</div>\n\n<h3>Highlight and Accent Colors</h3>\n<div class=\"colors-section\">\n\t<div>\n\t\t<div class=\"color-div\">\n\t\t\t<div class=\"color-chip\" style=\"background-color: #e4f9ff;\">#e4f9ff</div>\n\t\t\t<div class=\"color-chip-name\">Selected Blue ($color-accent-6)</div>\n\t\t\t<ul>\n\t\t\t\t<li>Selected tile or table cell background</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"color-div\">\n\t\t\t<div class=\"color-chip\" style=\"background-color: #fff6ce;\">#fff6ce</div>\n\t\t\t<div class=\"color-chip-name\">Selected Yellow ($color-accent-2)</div>\n\t\t\t<ul>\n\t\t\t\t<li>Selected tile background</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"color-div\">\n\t\t\t<div class=\"color-chip\" style=\"background-color: #ffd92d;\">#ffd92d</div>\n\t\t\t<div class=\"color-chip-name\">Accent Yellow ($color-accent-1)</div>\n\t\t\t<ul>\n\t\t\t\t<li>Selected tile border</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<div class=\"colors-column-right\">\n\t\t<div class=\"color-div\">\n\t\t\t<div class=\"color-chip\" style=\"background-color: #f17e12; color: #fff;\">#f17e12</div>\n\t\t\t<div class=\"color-chip-name\">Accent Orange ($color-accent-3)</div>\n\t\t\t<ul>\n\t\t\t\t<li>Warning text</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"color-div\">\n\t\t\t<div class=\"color-chip\" style=\"background-color: #e50000; color: #fff;\">#e50000</div>\n\t\t\t<div class=\"color-chip-name\">Error Red ($color-accent-4)</div>\n\t\t\t<ul>\n\t\t\t\t<li>Error text</li>\n\t\t\t\t<li>Error icon background</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"color-div\" style=\"margin-bottom: 100px;\">\n\t\t\t<div class=\"color-chip\" style=\"background-color: #37c26a; color: #fff;\">#37c26a</div>\n\t\t\t<div class=\"color-chip-name\">Success Green ($color-accent-5)</div>\n\t\t\t<ul>\n\t\t\t\t<li>Success text</li>\n\t\t\t\t<li>OK icon color</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var DemoContentComponent = (function () {
	    function DemoContentComponent() {
	    }
	    return DemoContentComponent;
	}());
	DemoContentComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(20),
	        transclude: true
	    })
	], DemoContentComponent);
	exports.default = DemoContentComponent;


/***/ },
/* 20 */
/***/ function(module, exports) {

	var path = 'components/components/demo-content.component.html';
	var html = "<div ng-transclude></div>\n<table>\n    <thead>\n    <tr>\n        <th>Name</th>\n        <th>Title</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n        <td>\n            <i class=\"ias-icon ias-icon-favorite_outline_thin\"></i>\n            <a ui-sref=\".\">Antonio Barboni</a>\n        </td>\n        <td>UX Director</td>\n    </tr>\n    <tr>\n        <td>\n            <i class=\"ias-icon ias-icon-favorite_outline_thin\"></i>\n            <a ui-sref=\".\">Camelot Rinkus</a>\n        </td>\n        <td>Assistant to the UX Director</td>\n    </tr>\n    <tr>\n        <td>\n            <i class=\"ias-icon ias-icon-favorite_outline_thin\"></i>\n            <a ui-sref=\".\">Christian Pledger</a>\n        </td>\n        <td>Secret assistant to the UX Director</td>\n    </tr>\n    </tbody>\n</table>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var DialogComponent = (function () {
	    function DialogComponent() {
	    }
	    return DialogComponent;
	}());
	DialogComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(22)
	    })
	], DialogComponent);
	exports.default = DialogComponent;


/***/ },
/* 22 */
/***/ function(module, exports) {

	var path = 'components/docs/dialog/dialog.component.html';
	var html = "<h1 class=\"ias-page-title\">Dialog</h1>\n\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n    Dialogs allow for a system to overtly call the attention of the user away from the page to its content. A dialog's\n    content is always something a developer would like the user to do or know. Dialogs are tied to the current page to\n    keep information available to users as they interact with the component. Some usage examples could be a warning\n    message, instructions, or input fields necessary for progression.\n</p>\n\n<p>\n    By default, dialog content scrolls vertically when it does not fit within the viewport.\n</p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n    Call the attention of the user to important information or request necessary actions.\n</p>\n\n<h2>Examples</h2>\n<h3>Simple</h3>\n<section class=\"component-dialog\">\n    <h3>The dialog glass (grey background cover) is transparent to see content underneath.</h3>\n\n    <div class=\"ias-dialog\" repeat-as-code prism-insert-id=\"code-01\">\n        <div class=\"ias-dialog-container\">\n            <div class=\"ias-dialog-content\">\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim nisl nec risus cursus\n                    cursus. Morbi ex tellus, condimentum a commodo sed, sagittis non massa. Praesent eleifend a orci et\n                    lobortis. Integer vel auctor felis. Donec dignissim nulla lectus, eget porta ipsum finibus eget.\n                </p>\n\n                <button class=\"ias-button ias-icon-button ias-dialog-cancel-button\">\n                    <i class=\"ias-icon ias-icon-close_thick\"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n</section>\n<toggleable-code id=\"code-01\"></toggleable-code>\n\n<h3>Dialog with .ias-actions and .ias-dialog-label</h3>\n<section class=\"component-dialog\">\n    <h3>The dialog glass (grey background cover) is transparent to see content underneath.</h3>\n\n    <div class=\"ias-dialog\" repeat-as-code prism-insert-id=\"code-02\">\n        <div class=\"ias-dialog-container\">\n            <div class=\"ias-dialog-content\">\n                <div class=\"ias-dialog-label\">Dialog Label</div>\n                <div class=\"ias-input-container\">\n                    <input name=\"username\" placeholder=\"New Password\" type=\"text\" autocomplete=\"off\">\n                </div>\n                <div class=\"ias-input-container\">\n                    <input name=\"password\" placeholder=\"Confirm Password\" type=\"text\" autocomplete=\"off\">\n                </div>\n                <div class=\"ias-actions\">\n                    <button class=\"ias-button ias-cta\">Change</button>\n                    <button class=\"ias-button\">Cancel</button>\n                </div>\n\n                <button class=\"ias-button ias-icon-button ias-dialog-cancel-button\">\n                    <i class=\"ias-icon ias-icon-close_thick\"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n</section>\n<toggleable-code id=\"code-02\"></toggleable-code>\n\n<h3>Dialog with .ias-dialog-title</h3>\n<section class=\"component-dialog\">\n    <h3>The dialog glass (grey background cover) is transparent to see content underneath.</h3>\n\n    <div class=\"ias-dialog\" repeat-as-code prism-insert-id=\"code-03\">\n        <div class=\"ias-dialog-container\">\n            <div class=\"ias-dialog-content\">\n                <div class=\"ias-dialog-title\">Dialog Title</div>\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim nisl nec risus cursus\n                    cursus. Morbi ex tellus, condimentum a commodo sed, sagittis non massa. Praesent eleifend a orci et\n                    lobortis. Integer vel auctor felis. Donec dignissim nulla lectus, eget porta ipsum finibus eget.\n                </p>\n\n                <button class=\"ias-button ias-icon-button ias-dialog-cancel-button\">\n                    <i class=\"ias-icon ias-icon-close_thick\"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n</section>\n<toggleable-code id=\"code-03\"></toggleable-code>\n\n<h2>Appearance</h2>\n<h3>Dialog Specifics</h3>\n<h5>Implementation</h5>\n<ul>\n    <li>A close icon button should always be an available option for closing a dialog.</li>\n    <li>Dialog content should initially be placed near the center of the page slightly offset above the middle.</li>\n</ul>\n\n<h5>Dialog Glass</h5>\n<ul>\n    <li>A transparent grey background that covers the original page to help accentuate the dialog content.</li>\n    <li>A dialog can be moved around in the window by the title element to see the content beneath the dialog glass.\n    </li>\n    <li>Moving a dialog causes the dialog to become transparent, allow a user to easily read content beneath.</li>\n    <li>Closing a dialog should be done by clicking the exit icon button. Optionally a dialog can be made to close\n        by clicking the dialog glass.\n    </li>\n    <li>The dialog glass will absorb mouse events when present unless it's made to close the dialog.</li>\n</ul>\n\n<h5>Common Patterns</h5>\n<ul>\n    <li>Dialogs communicate with the user by greying out the page and highlighting dialog box content.</li>\n    <li>Limit the amount of content within the dialog to not overload the component with information.</li>\n    <li>Dialogs are often used for verifying an action, gathering inputs, or editing an objects data.</li>\n\n</ul>\n\n<h3>Nesting</h3>\n\n<h5>Nestable Components</h5>\n<p class=\"ias-page-instructions\">\n    Dialogs can nest nearly any component to help convey the message to a user or get necessary\n    information. The list below are likely to be common components, but are not exhaustive.\n</p>\n<ul>\n    <li>Buttons ias-button</li>\n    <li>Icon Buttons ias-icon-button</li>\n    <li>Inputs &lt;input&gt;</li>\n    <li>Paragraphs &lt;p&gt;</li>\n\n</ul>\n\n<h5>Nesting Dialogues in Other Components</h5>\n<p class=\"ias-page-instructions\">\n    Dialogs should NEVER be nested into other elements. Dialogs are fixed to the window and grey out all other\n    elements.\n</p>\n\n<h3>Responsive Displays</h3>\n<p class=\"ias-page-instructions\">\n    As a screen is scaled down the dialog glass and dialog content will also be scaled down as well. The content of a\n    dialog will begin to row wrap its content to accommodate for the reduced dialog width.\n</p>\n\n\n\n\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var FormFieldComponent = (function () {
	    function FormFieldComponent() {
	    }
	    return FormFieldComponent;
	}());
	FormFieldComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(24)
	    })
	], FormFieldComponent);
	exports.default = FormFieldComponent;


/***/ },
/* 24 */
/***/ function(module, exports) {

	var path = 'components/docs/form-field/form-field.component.html';
	var html = "<h1 class=\"ias-page-title\">Form Field</h1>\n\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n    Form fields are used to both request desired information from a user as well as receive that input. When requesting\n\tan input from a user, make sure it is clear what is being requested. This can be gleaned from the context of the\n    input field, but more often it will be from an input label or placeholder.  If the input format needs to be\n    specific, create a visible hint that expresses the format to the user through a placeholder.\n</p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n    Allows a user to enter requested information into an application.\n</p>\n\n<h2>Examples</h2>\n\n<h3>Basic Examples</h3>\n<p class=\"ias-page-instructions\">\n\n</p>\n<section id=\"form-fields\" style=\"margin-bottom: 120px;\">\n\n\t<section>\n\t\t<h5>Input</h5>\n\t\t<input type=\"text\" name=\"username\" autocomplete=\"off\" toggle-repeat-code/>\n\t</section>\n\n\t<section>\n\t\t<h5>Disabled Input</h5>\n\t\t<input type=\"text\" name=\"username\" autocomplete=\"off\" disabled toggle-repeat-code/>\n\t</section>\n\n\t<section>\n\t\t<h5>Input with a Placeholder</h5>\n\t\t<div toggle-repeat-code=\"inner\">\n\t\t\t<input type=\"text\" placeholder=\"Username\" name=\"username\" autocomplete=\"off\"/>\n\t\t\t<input type=\"password\" placeholder=\"Password\" name=\"password\"/>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<h5>Input with a Label</h5>\n\t\t<div toggle-repeat-code=\"inner\">\n\t\t\t<label>\n\t\t\t\tUsername <input type=\"text\" name=\"username\" autocomplete=\"off\"/>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\tPassword <input type=\"password\" name=\"password\"/>\n\t\t\t</label>\n\t\t</div>\n\t</section>\n\n    <section>\n        <h5>label > select</h5>\n        <div toggle-repeat-code=\"inner\">\n            <label>\n                Drop Down 1\n                <select>\n                    <option value=\"1\">Option 1</option>\n                    <option value=\"2\">Option 2</option>\n                    <option value=\"3\">Option 3</option>\n                </select>\n            </label>\n            <label>\n                Drop Down 2\n                <select>\n                    <option value=\"1\">Option 1</option>\n                    <option value=\"2\">Option 2</option>\n                    <option value=\"3\">Option 3</option>\n                </select>\n            </label>\n        </div>\n    </section>\n\n<h3>Input Container Class</h3>\n    <p class=\"ias-page-instructions\">\n\n    </p>\n\t<section>\n\t\t<h5>.ias-input-container with an Input</h5>\n\t\t<div toggle-repeat-code=\"inner\">\n\t\t\t<div class=\"ias-input-container\">\n\t\t\t\t<input type=\"text\" placeholder=\"Username\" name=\"username\" autocomplete=\"off\"/>\n\t\t\t</div>\n\t\t\t<div class=\"ias-input-container\">\n\t\t\t\t<input type=\"password\" placeholder=\"Password\" name=\"password\"/>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n    <section>\n        <h5>.ias-input-container with Disabled Input</h5>\n\n        <div class=\"ias-input-container\" toggle-repeat-code>\n            <input type=\"text\" placeholder=\"Username\" name=\"username\" autocomplete=\"off\" disabled=\"disabled\"/>\n        </div>\n    </section>\n\n\t<section>\n\t\t<h5>.ias-input-container with a Label</h5>\n\t\t<div toggle-repeat-code=\"inner\">\n\t\t\t<div class=\"ias-input-container\">\n\t\t\t\t<label for=\"username\">Username</label>\n\t\t\t\t<input type=\"text\" name=\"username\" id=\"username\" autocomplete=\"off\"/>\n\t\t\t</div>\n\t\t\t<div class=\"ias-input-container\">\n\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t<input type=\"password\" name=\"password\" id=\"password\"/>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n    <section>\n        <h5>.ias-input-container.ias-inline</h5>\n        <div toggle-repeat-code=\"inner\">\n            <div class=\"ias-input-container ias-inline\">\n                <label for=\"username-2\">Username</label>\n                <input type=\"text\" name=\"username\" id=\"username-2\" autocomplete=\"off\"/>\n            </div>\n            <div class=\"ias-input-container ias-inline\">\n                <label for=\"password-2\">Password</label>\n                <input type=\"password\" name=\"password\" id=\"password-2\"/>\n            </div>\n        </div>\n    </section>\n\n\t<section>\n\t\t<h5>.ias-input-container > select with a Label</h5>\n\t\t<div toggle-repeat-code=\"inner\">\n\t\t\t<div class=\"ias-input-container\">\n\t\t\t\t<label for=\"drop-down-1\">Drop Down 1</label>\n\t\t\t\t<select id=\"drop-down-1\">\n\t\t\t\t\t<option value=\"1\">Option 1</option>\n\t\t\t\t\t<option value=\"2\">Option 2</option>\n\t\t\t\t\t<option value=\"3\">Option 3</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"ias-input-container\">\n\t\t\t\t<label for=\"drop-down-2\">Drop Down 2</label>\n\t\t\t\t<select id=\"drop-down-2\">\n\t\t\t\t\t<option value=\"1\">Option 1</option>\n\t\t\t\t\t<option value=\"2\">Option 2</option>\n\t\t\t\t\t<option value=\"3\">Option 3</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<h5>Radio Buttons</h5>\n\t\t<div class=\"ias-input-container ias-inline\" toggle-repeat-code=\"inner\">\n            <span>\n                <input type=\"radio\" value=\"1\" name=\"radio1\" id=\"radio1-1\">\n                <label class=\"label-large-dark\" for=\"radio1-1\">One</label>\n            </span>\n            <span>\n                <input type=\"radio\" value=\"2\" name=\"radio1\" id=\"radio1-2\">\n                <label class=\"label-large-dark\" for=\"radio1-2\">Two</label>\n            </span>\n            <span>\n                <input type=\"radio\" value=\"3\" name=\"radio1\" id=\"radio1-3\">\n                <label class=\"label-large-dark\" for=\"radio1-3\">Three</label>\n            </span>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<h5>Check Boxes</h5>\n\t\t<div class=\"ias-input-container ias-inline\" toggle-repeat-code>\n\t\t\t<div>\n\t\t\t\t<input type=\"checkbox\" value=\"1\" id=\"checkbox1\">\n\t\t\t\t<label class=\"label-large-dark\" for=\"checkbox1\">One</label>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<input type=\"checkbox\" value=\"2\" id=\"checkbox2\">\n\t\t\t\t<label class=\"label-large-dark\" for=\"checkbox2\">Two</label>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<input type=\"checkbox\" value=\"3\" id=\"checkbox3\">\n\t\t\t\t<label class=\"label-large-dark\" for=\"checkbox3\">Three</label>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<h5>ias-input-container > textarea</h5>\n\n\t\t<div class=\"ias-input-container\" toggle-repeat-code>\n\t\t\t<label for=\"textarea-2\">Long Text</label>\n\t\t\t<textarea id=\"textarea-2\"></textarea>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<h3>.ias-search</h3>\n\n\t\t<div class=\"ias-search\" toggle-repeat-code>\n\t\t\t<input type=\"text\" placeholder=\"Search\"/>\n\t\t\t<i class=\"ias-icon ias-icon-search_thick\"></i>\n\t\t\t<button class=\"ias-button ias-icon-button\"><i class=\"ias-icon ias-icon-close_thick\"></i></button>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<h3>.ias-autocomplete</h3>\n\n\t\t<div class=\"ias-autocomplete ias-open\" toggle-repeat-code>\n\t\t\t<div class=\"ias-search\">\n\t\t\t\t<input type=\"text\" placeholder=\"Search\"/>\n\t\t\t\t<i class=\"ias-icon ias-icon-search_thick\"></i>\n\t\t\t\t<button class=\"ias-button ias-icon-button\"><i class=\"ias-icon ias-icon-close_thick\"></i></button>\n\t\t\t</div>\n\n\t\t\t<div class=\"ias-results\">\n\t\t\t\t<div class=\"ias-result\" tabindex=\"0\">Item 1</div>\n\t\t\t\t<div class=\"ias-result\" tabindex=\"0\">Item 2</div>\n\t\t\t\t<div class=\"ias-result\" tabindex=\"0\">Item 3</div>\n\t\t\t\t<div class=\"ias-result\" tabindex=\"0\">Item 4</div>\n\t\t\t\t<div class=\"ias-result\" tabindex=\"0\">Item 5</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</section>\n\n<h2>Appearance</h2>\n<h3>Comment Specifics</h3>\n    <h5>Implementation</h5>\n    <ul>\n        <li>The .ias-input-container class is used to help create a consistent styling for form fields.</li>\n        <li>Label elements within an .ias-input-container are block level elements, but .ias-inline can be added for an\n            inline variation.</li>\n        <li>When using an .ias-search remember to sanitize the inputs given to protect against malicious code.</li>\n        <li>Also debounce when using .ias-autocomplete to improve performance.</li>\n    </ul>\n\n    <h5>Common Patterns</h5>\n    <ul>\n        <li>Form fields are used to both request and receive desired data from a user.</li>\n        <li>Labels, placeholders and hints can provide limited instruction for a desired input.</li>\n        <li>Do not overwhelm a user with too many inputs, ask for the minimum amount of information necessary to make\n            the form effective.</li>\n    </ul>\n\n<h3>Nesting</h3>\n    <h5>Nestable Components</h5>\n        <ul>\n            <li>Icons .ias-icon</li>\n            <li>Icon Buttons .ias-icon-button</li>\n        </ul>\n\n    <h5>Nesting Inputs in Other Components</h5>\n    <p>\n        Inputs are used to gather input from a user and can be applied to many different components. Whenever a user\n        needs to input information into a page or form, an input can be used.\n    </p>\n\n<h3>Responsive Display</h3>\n    <p>\n        Form fields are responsive and will grow or shrink relative to the overall size of the display.\n    </p>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var FormValidationComponent = (function () {
	    function FormValidationComponent() {
	    }
	    return FormValidationComponent;
	}());
	FormValidationComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(26)
	    })
	], FormValidationComponent);
	exports.default = FormValidationComponent;


/***/ },
/* 26 */
/***/ function(module, exports) {

	var path = 'components/docs/form-validation/form-validation.component.html';
	var html = "<h1>Form Validation</h1>\n\n<h2>General</h2>\n    <p class=\"ias-page-instructions\">\n        Validation provides a means to ensure the user is inputting usable data into a form. Form validation can be\n        expressed to a user initially by denoting required inputs with the required symbol; or, after a user enters\n        invalid information into the form through warnings and invalid states.\n    </p>\n<h2>Purpose</h2>\n    <p class=\"ias-page-instructions\">\n        Provide a method for verifying user input is desired and usable information.\n    </p>\n<h2>Examples</h2>\n\n<section>\n    <h3>Pristine input field</h3>\n    <p>Pristine input fields are fields which have not been interacted with. A pristine field that is in an invalid\n        state should not appear to be in an invalid state (i.e. do not display red border, validation messages, or\n        icons). After the user interacts with the input, apply invalid state styles.</p>\n\n    <div class=\"ias-input-container\">\n        <label>Pristine email input</label>\n        <input class=\"ias-invalid ias-invalid-required ias-pristine\" type=\"email\"/>\n    </div>\n\n    <div class=\"ias-input-container\">\n        <label>Non-pristine email input</label>\n        <input class=\"ias-invalid ias-invalid-required\" type=\"text\" value=\"invalidemail\"/>\n    </div>\n</section>\n\n<section>\n    <h3>Required input field</h3>\n    <p>The required field element should be applied to all required input fields. This element is meant to be used in\n        regular or complex forms that have three or more input fields. Not all forms will need to use the require field\n        notification. For example, a sign in page often includes a form with username and password input fields. These\n        inputs are understood to be required to sign in, but usually don't include a required mark.</p>\n    <p>A \"required\" note is not necessary at the bottom of the form since the require asterisk is widely used and\n        understood</p>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-input-container\">\n            <label>Label stacked <span class=\"ias-required\">*</span></label>\n            <input type=\"text\" required/>\n        </div>\n        <div class=\"ias-input-container\">\n            <label>\n                Label inline <span class=\"ias-required\">*</span>\n                <input type=\"text\" required/>\n            </label>\n        </div>\n        <div class=\"ias-input-container\">\n            <input type=\"text\" placeholder=\"Required input placeholder *\" required/>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>Hints</h3>\n    <p>Use the following three methods to instruct the user when a user requires additional information to complete a\n        form field.</p>\n\n\n    <h4>1. Inline label hint</h4>\n    <p>Inline label hints must always be placed inside of parenthesis. The hint should be clear, short, and\n        helpful.</p>\n\n    <div class=\"ias-input-container\" toggle-repeat-code>\n        <label>Username (min 5 characters)</label>\n        <div>\n            <div><input type=\"text\"/></div>\n        </div>\n    </div>\n\n\n    <h4>2. Validation message after input</h4>\n    <p>Validation messages placed after the input are visible only after the user has interacted with the input. The\n        text should be read and easy to read. Messages should be clear, short, and helpful. For longer messages use the\n        info icon method (see below).</p>\n\n    <div class=\"ias-input-container\" toggle-repeat-code>\n        <label>Server</label>\n        <input class=\"ias-invalid\" type=\"text\"/>\n        <div class=\"ias-input-messages\" role=\"alert\">\n            <div class=\"ias-input-message\">Validation error</div>\n        </div>\n    </div>\n\n\n    <h4>3. Info icon to launch tooltip</h4>\n    <p>If your hint text is too complex for the other methods, use an info icon and tooltip. Clicking/Hovering the info\n        icon displays a tooltip. The tooltip should not contain extensive documentation or instructions. It should\n        contain just enough to instruct the user on how to complete the input.\n    </p>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-input-container\">\n            <label>Username <i class=\"ias-icon ias-icon-status_info_thick\" style=\"color:#0090da;\"></i></label>\n            <input type=\"text\"/>\n        </div>\n        <div class=\"ias-input-container\">\n            <label>Label <i class=\"ias-icon ias-icon-message_error_thick\" style=\"color:#e50000;\"></i></label>\n            <input class=\"ias-invalid\" type=\"text\"/>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>Form Messages</h3>\n    <p>Form messages are used when portions of the form are not visible to the user (ex: in tabs, accordions, or tile\n        grids). The message should appear at the top of the form and should instruct the user that additional changes\n        are required to complete the form.</p>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-form-message\">\n            <i class=\"ias-icon ias-icon-message_error_thick\" style=\"color:#e50000\"></i>\n            <span>App connector needs more information.</span>\n        </div>\n        <div class=\"ias-form-message\">\n            <i class=\"ias-icon ias-icon-message_error_thick\" style=\"color:#e50000\"></i>\n            <span>More information needed before submitting.</span>\n        </div>\n    </div>\n\n    <div class=\"ias-panel\">\n        <div class=\"ias-panel-header\">\n            <div class=\"ias-panel-title\">Tile Grids</div>\n        </div>\n        <div class=\"ias-panel-body\">\n            <p>Tile grids hide information about each element in the grid. Form messages make it obvious to the user\n                that a tile in the tile grid requires additional attention. The offending tile should similarly be\n                marked as invalid.</p>\n            <img src=\"images/warning_icon1.png\" alt=\"\">\n        </div>\n    </div>\n\n    <div class=\"ias-panel\">\n        <div class=\"ias-panel-header\">\n            <div class=\"ias-panel-title\">Accordion</div>\n        </div>\n        <div class=\"ias-panel-body\">\n            <p>Accordions hide information about each section. Form messages make it obvious to the user\n                that a section of the accordion requires additional attention. The offending section should similarly be\n                marked as invalid.</p>\n            <img src=\"images/warning_icon2.png\" alt=\"\">\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>Invalid state styles</h3>\n\n    <h4>Invalid required field</h4>\n    <div class=\"ias-input-container\" toggle-repeat-code>\n        <label>Label stacked <span class=\"ias-required\">*</span></label>\n        <input class=\"ias-invalid ias-invalid-required\" type=\"text\" required/>\n    </div>\n\n\n    <h4>Invalid data in a field</h4>\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-input-container\">\n            <label>Label stacked <i class=\"ias-icon ias-icon-message_error_thick\" style=\"color:#e50000\"></i></label>\n            <input class=\"ias-invalid\" type=\"text\" value=\"data entered by user\"/>\n        </div>\n\n        <div class=\"ias-input-container\">\n            <label>\n                Label inline <i class=\"ias-icon ias-icon-message_error_thick\" style=\"color:#e50000\"></i>\n                <input class=\"ias-invalid\" type=\"text\" value=\"data entered by user\"/>\n            </label>\n\n        </div>\n    </div>\n\n\n    <h4>Invalid data in a field with message</h4>\n    <div class=\"ias-input-container\" toggle-repeat-code>\n        <label>Email</label>\n        <input class=\"ias-invalid\" type=\"email\" value=\"smithsonian.gmail.com\"/>\n        <div class=\"ias-input-messages\" role=\"alert\">\n            <div class=\"ias-input-message\">Enter a valid email</div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>Validating data asynchronously</h3>\n    <p>Sometimes it may be necessary to validate user input on a server. A loader clearly indicates to the user that\n        validation is occurring. When the validation is complete indicate to the user the result of the validation with\n        status icons. In the event that validation fails, clicking on the info icon should present a tooltip with\n        additional information to correct the error.</p>\n    <p>Asynchronous validation should be de-bounced to allow the user to complete input before validation occurs. This\n        prevents validation from occurring on each keystroke.</p>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-input-container\">\n            <label>\n                Email <img class=\"ias-wait-icon ias-small\" src=\"images/waiting_25.gif\" alt=\"\">\n            </label>\n            <input type=\"email\" value=\"jonathan@smithsonian.com\"/>\n        </div>\n\n        <div class=\"ias-input-container\">\n            <label>Email <i class=\"ias-icon ias-icon-status_ok_thin\" style=\"color:#37c26a;\"></i></label>\n            <input type=\"email\" value=\"jonathan@smithsonian.com\"/>\n        </div>\n\n        <div class=\"ias-input-container\">\n            <label>Email <i class=\"ias-icon ias-icon-message_error_thick\" style=\"color:#e50000\"></i></label>\n            <input class=\"ias-invalid\" type=\"email\" value=\"jonathan.com\"/>\n        </div>\n    </div>\n</section>\n\n<h2>Appearance</h2>\n<h3>Form Validation Specifics</h3>\n    <h5>Implementation</h5>\n    <ul>\n        <li>The required symbol should be used when you have three or more input options.</li>\n        <li>Pristine fields are invalid when loading the page, but wont display an invalid state until interacted with\n            by the user.</li>\n\n    </ul>\n\n    <h5>Common Patterns</h5>\n    <ul>\n        <li>Use validation as a means of communicating incorrect or missing inputs to the user.</li>\n        <li>Limit the use of input fields to only what is necessary for completing the form. Do not overload the user\n            with input fields.</li>\n        <li>Asynchronous validation provides real-time feedback to the user as validation occurs.</li>\n    </ul>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var IconComponent = (function () {
	    function IconComponent() {
	    }
	    return IconComponent;
	}());
	IconComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(28)
	    })
	], IconComponent);
	exports.default = IconComponent;


/***/ },
/* 28 */
/***/ function(module, exports) {

	var path = 'components/docs/icon/icon.component.html';
	var html = "<h1>Icon</h1>\n\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n\tIcons visually add continuity, branding, and flow to otherwise homogeneous data. The contrast added to the UI can\n\thelp make important data stand out. However, adding too many icons increases visual turbulence and will decrease\n\tthe icons' value.\n</p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n\tTo create visual continuity for common components and data across a product.\n</p>\n\n<h2>Examples</h2>\n<p class=\"ias-page-instructions\">\n\tThe following are three standard sizes. Exceptions will exist, but try to use these sizes, if possible, to\n\tcontribute to a consistent look.\n</p>\n<section>\n\t<h3>.ias-icon</h3>\n\n\t<div toggle-repeat-code=\"inner\">\n\t\t<i class=\"ias-icon ias-icon-resource_thick\"></i>\n\t\t<i class=\"ias-icon ias-icon-phone_thick\"></i>\n\t\t<i class=\"ias-icon ias-icon-favorite_outline_thin\"></i>\n\t</div>\n</section>\n\n<section>\n\t<h3>With .ias-medium</h3>\n\n\t<div toggle-repeat-code=\"inner\">\n\t\t<i class=\"ias-icon ias-icon-resource_thick ias-medium\"></i>\n\t\t<i class=\"ias-icon ias-icon-phone_thick ias-medium\"></i>\n\t\t<i class=\"ias-icon ias-icon-favorite_outline_thin ias-medium\"></i>\n\t</div>\n</section>\n\n<section>\n\t<h3>With .ias-large</h3>\n\n\t<div toggle-repeat-code=\"inner\">\n\t\t<i class=\"ias-icon ias-icon-resource_thick ias-large\"></i>\n\t\t<i class=\"ias-icon ias-icon-phone_thick ias-large\"></i>\n\t\t<i class=\"ias-icon ias-icon-favorite_outline_thin ias-large\"></i>\n\t</div>\n</section>\n\n<!--<section>-->\n\t<!--<h3>w/ svg icons<span></span></h3>-->\n\n\t<!--<div toggle-repeat-code=\"inner\">-->\n\t\t<!--<img class=\"svg-icon\" src=\"images/account-box.svg\" alt=\"images/account-box.svg\">-->\n\t\t<!--<img class=\"svg-icon ias-medium\" src=\"images/account-box.svg\" alt=\"images/account-box.svg\">-->\n\t\t<!--<img class=\"svg-icon ias-large\" src=\"images/account-box.svg\" alt=\"images/account-box.svg\">-->\n\t<!--</div>-->\n<!--</section>-->\n\n<h2>Appearance</h2>\n<h3>Icon Specifics</h3>\n\t<h5>Common Patterns</h5>\n\t<ul>\n\t\t<li>Present information without text, (use icons that have universal meaning in these cases)</li>\n\t\t<li>Represent available actions with optimal space</li>\n\t\t<li>Represent information combined with icons</li>\n\t\t<li>Express state visually</li>\n\t\t<li>Express status</li>\n\t\t<li>Identification</li>\n\t</ul>\n\n\n<h3>Icon Font</h3>\n<p class=\"ias-page-instructions\">\n\tThe top nav bar points to the icon font that you can include within your project. The font will give\n\tyou many common icons and can be colored and sized simply via css.\n</p>\n\n<h3>Approved icon fonts</h3>\n<ul>\n\t<li>ias-icons</li>\n</ul>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var LinkComponent = (function () {
	    function LinkComponent() {
	    }
	    return LinkComponent;
	}());
	LinkComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(30)
	    })
	], LinkComponent);
	exports.default = LinkComponent;


/***/ },
/* 30 */
/***/ function(module, exports) {

	var path = 'components/docs/link/link.component.html';
	var html = "<h1>Links</h1>\n\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n    Links are components used to aid in user navigation. They allow users to jump between different pages, sections of\n    the same page, outside URLs, and access files and emails. When creating links, make link text short and descriptive\n    to the action of the link.\n</p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n    A means of navigation within a page.\n</p>\n\n<h2>Examples</h2>\n<section>\n    <h3>Default Usage</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <a ui-sref=\"app.component.link\">New York</a>\n        <a ui-sref=\"app.component.link\">Chicago</a>\n    </div>\n</section>\n\n<section>\n    <h3>Usage (Block)</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div><a ui-sref=\"app.component.link\">New York</a></div>\n        <div><a ui-sref=\"app.component.link\">Chicago</a></div>\n    </div>\n</section>\n\n<section>\n    <h3>In Text</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <p>This is a <a ui-sref=\"app.component.link\">link</a> in the middle of a paragraph</p>\n        <span>This is a <a ui-sref=\"app.component.link\">link</a> in the middle of a span</span>\n    </div>\n</section>\n\n<section>\n    <h3>.ias-link-margin</h3>\n\n    <p toggle-repeat-code>Short blurb…<a ui-sref=\"app.component.link\" class=\"ias-link-margin\">More</a></p>\n</section>\n\n<section>\n    <h3>.ias-link-no-highlight</h3>\n\n    <a ui-sref=\"app.component.link\" class=\"ias-link-no-highlight\" toggle-repeat-code>De-emphasized</a>\n</section>\n\n<h2>Appearance</h2>\n<h3>Link Specifics</h3>\n    <h5>Implementation</h5>\n    <ul>\n        <li>Keep link text short, concise, and descriptive to the action or location the link will take you.</li>\n        <li>If a longer description is necessary, include that description as a title attribute within the link.</li>\n    </ul>\n    <h5>Common Patterns</h5>\n    <ul>\n        <li>Links are generally styled in a different color than content text and users use this characteristic to\n            find them quickly.</li>\n        <li>Links are inline elements by default, nest links with or within a block element to create the block usage.\n        </li>\n    </ul>\n<h3>Nesting</h3>\n<p class=\"ias-page-instructions\">\n    Links themselves are elements that are most often nested within other elements. If it would make sense to have a\n    element work as a link, a link can likely be nested.\n</p>\n\n\n\n<!-- <section>\n\t<h3>Supported Uses </h3>\n\t<a class=\"ias-button\" ui-sref=\"app.component.link\" toggle-repeat-code>Button</a>\n\t<div class=\"ias-tile ias-medium\" tabindex=\"0\" toggle-repeat-code>\n\t\t<div class=\"ias-avatar\" style=\"background-color:#eff491;\"></div>\n\t\t<div class=\"ias-tile-content\">\n\t\t\t<h3>Search</h3>\n\t\t\t<p><a ui-sref=\"app.component.link\">On a tile</a></p>\n\t\t</div>\n\t</div>\n\t<div class=\"ias-tabset\" toggle-repeat-code>\n\t\t<div class=\"ias-tab ias-selected\">Rainy Days</div>\n\t\t<div class=\"ias-tab\">Sunny Days</div>\n\t\t<div class=\"ias-tab-base\"></div><div class=\"ias-fill\"></div>\n\t\t<a ui-sref=\"app.component.link\">In a tabset</a>\n\t</div>\n\t<div class=\"ias-nav\" toggle-repeat-code>\n\t\t<a class=\"ias-active\" ui-sref=\"app.component.nav\">Nav Link 1</a>\n\t\t<a ui-sref=\"app.component.link\">Nav Link 2</a>\n\t</div>\n</section> -->\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var ListComponent = (function () {
	    function ListComponent() {
	    }
	    return ListComponent;
	}());
	ListComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(32)
	    })
	], ListComponent);
	exports.default = ListComponent;


/***/ },
/* 32 */
/***/ function(module, exports) {

	var path = 'components/docs/list/list.component.html';
	var html = "<h1 class=\"ias-page-title\">Lists</h1>\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n    Lists provide a way of visually grouping related information. Items within a list may also be paired with other\n    elements, such as icons and avatars, to differentiate similar information or show the current state of a\n    list item.\n</p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n    To visually group related information together as well as describe the state of its elements.\n</p>\n\n<h2>Examples</h2>\n<h3>Default</h3>\n<section>\n    <ul class=\"ias-list\" toggle-repeat-code>\n        <li tabindex=\"0\"><span>Jonathan Smithsonian</span></li>\n        <li tabindex=\"0\"><span>Camelot Rinkus</span></li>\n        <li tabindex=\"0\"><span>Christian Pledger</span></li>\n        <li tabindex=\"0\"><span>Becky Babbitt</span></li>\n    </ul>\n</section>\n\n<h3>w/ .ias-icon</h3>\n<section>\n    <ul class=\"ias-list\" toggle-repeat-code>\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            <span>Jonathan Smithsonian</span>\n        </li>\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-favorite_outline_thin\"></i>\n            <span>Camelot Rinkus</span>\n        </li>\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-favorite_outline_thin\"></i>\n            <span>Christian Pledger</span>\n        </li>\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            <span>Becky Babbitt</span>\n        </li>\n    </ul>\n</section>\n\n<section>\n    <h3>w/ .ias-avatar</h3>\n    <ul class=\"ias-list\" toggle-repeat-code>\n        <li tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <span>Search</span>\n        </li>\n        <li tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n            <span>OneDrive</span>\n        </li>\n        <li tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_01.png)\">\n            </div>\n            <span>Geeko</span>\n        </li>\n        <li tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n            <span>Version One</span>\n        </li>\n    </ul>\n</section>\n\n<section>\n    <h3>w/ secondary .ias-icon</h3>\n\n    <ul class=\"ias-list\" toggle-repeat-code>\n        <li tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <span>Jonathan Smithsonian</span>\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </li>\n        <li tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n            <span>Camelot Rinkus</span>\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </li>\n        <li tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_01.png)\">\n            </div>\n            <span>Christian Pledger</span>\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </li>\n        <li tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n            <span>Becky Babbitt</span>\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </li>\n    </ul>\n</section>\n\n\n<section>\n    <h3>.ias-offset</h3>\n\n    <ul class=\"ias-list\" toggle-repeat-code>\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-check_thick\"></i>\n            <span>Jonathan Smithsonian</span>\n        </li>\n        <li tabindex=\"0\" class=\"ias-offset\">\n            <span>Camelot Rinkus</span>\n        </li>\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-check_thick\"></i>\n            <span>Christian Pledger</span>\n        </li>\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-check_thick\"></i>\n            <span>Becky Babbitt</span>\n        </li>\n    </ul>\n</section>\n\n<section toggle-repeat-code=\"\">\n    <h3>w/ .ias-list-header</h3>\n\n    <h3 class=\"ias-list-header\">List Header</h3>\n    <ul class=\"ias-list\">\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-check_thick\"></i>\n            <span>Jonathan Smithsonian</span>\n        </li>\n        <li tabindex=\"0\" class=\"ias-offset\">\n            <span>Camelot Rinkus</span>\n        </li>\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-check_thick\"></i>\n            <span>Christian Pledger</span>\n        </li>\n        <li tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-check_thick\"></i>\n            <span>Becky Babbitt</span>\n        </li>\n    </ul>\n</section>\n\n<h2>Appearance</h2>\n<h3>List Specifics</h3>\n    <h5>Common Patterns</h5>\n    <ul>\n        <li>Use lists to group related information together in a visually meaningful way.</li>\n        <li>Icons and avatars can help differentiate list items from each other.</li>\n        <li>Lists with icons and avatars are lists, not tables. Icons and avatars are nested within &lt;li&gt; elements.</li>\n        <li>Use .ias-offset to create a uniform alignment for items without added elements in lists that do.</li>\n    </ul>\n<h3>Nesting</h3>\n<h5>Nesting Lists in Other Components</h5>\n    <p class=\"ias-page-instructions\">\n        Lists are nested in many different elements. Nested lists can primarily be found in menus, tables, and panels.\n        However this is not the limit of their scope, as lists can be nested into most elements that make use of text.\n    </p>\n<h5>Nestable Components</h5>\n<p class=\"ias-page-instructions\">\n    Nesting icons within lists is often done to show the state of the list item associated with the icon.\n</p>\n    <ul>\n        <li>Avatar images (.ias-avatar)</li>\n        <li>Icons (.ias-icon)</li>\n        <li>Icon Buttons (.ias-button .ias-icon-button)</li>\n    </ul>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var MenuComponent = (function () {
	    function MenuComponent() {
	    }
	    return MenuComponent;
	}());
	MenuComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(34)
	    })
	], MenuComponent);
	exports.default = MenuComponent;


/***/ },
/* 34 */
/***/ function(module, exports) {

	var path = 'components/docs/menu/menu.component.html';
	var html = "<h1 class=\"ias-page-title\">Menus</h1>\n\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n    Menus are a toggleable component that provide the user with navigation, actions, options and information. Content\n    within a menu larger than three elements could benefit from grouping elements in logical sections.\n</p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n    A list of actionable items that can be shown or hidden with a toggle.\n</p>\n\n<h2>Examples</h2>\n\n<section>\n    <h3>.ias-menu-toggle</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <button type=\"button\" class=\"ias-button ias-menu-toggle\">\n            <span>Jonathan Smithsonian</span>\n            <i class=\"ias-icon ias-icon-down_thick\"></i>\n        </button>\n    </div>\n</section>\n\n<section>\n    <h3>.ias-icon-button Menu Toggle</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <button class=\"ias-button ias-icon-button\" type=\"button\">\n            <i class=\"ias-icon ias-icon-hamburger_menu_thick\"></i>\n        </button>\n        <button class=\"ias-button ias-icon-button\" type=\"button\">\n            <i class=\"ias-icon ias-icon-new_thick\"></i>\n        </button>\n        <button class=\"ias-button ias-icon-button\" type=\"button\">\n            <i class=\"ias-icon ias-icon-circle_horz_menu_fill\"></i>\n        </button>\n    </div>\n</section>\n\n<section>\n    <h3>.ias-open</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-menu ias-open\">\n            <div class=\"ias-menu-content\">\n                <button type=\"button\" class=\"ias-button\">Button 1</button>\n                <button type=\"button\" class=\"ias-button\">Button 2</button>\n                <button type=\"button\" class=\"ias-button\">Button 3</button>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>Menu with Grouped Elements</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-menu ias-open\">\n            <div class=\"ias-menu-content\">\n                <button type=\"button\" class=\"ias-button\">New</button>\n                <button type=\"button\" class=\"ias-button\">Open</button>\n                <button type=\"button\" class=\"ias-button\">Save</button>\n                <div class=\"ias-row ias-border-bottom\">\n                    <button type=\"button\" class=\"ias-button\">Print</button>\n                </div>\n                <button type=\"button\" class=\"ias-button\">Exit</button>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>Complex Menu</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-menu ias-open\">\n            <div class=\"ias-menu-content\">\n                <div class=\"ias-row ias-border-bottom\">\n                <div class=\"ias-column ias-border-end\">\n                    <div class=\"ias-row ias-border-bottom\">\n                        <div class=\"ias-column\">\n                            <h3 class=\"ias-menu-header\">First Section</h3>\n                            <button type=\"button\" class=\"ias-button\">View My Devices</button>\n                            <button type=\"button\" class=\"ias-button\">Help Me...(end-user)</button>\n                            <button type=\"button\" class=\"ias-button\">Request impersonate session...(HelpDesk)</button>\n                        </div>\n                    </div>\n                    <div class=\"ias-row ias-border-bottom\">\n                        <div class=\"ias-column\">\n                            <h3 class=\"ias-menu-header\">Second Section</h3>\n                            <button type=\"button\" class=\"ias-button\">Button 4</button>\n                            <button type=\"button\" class=\"ias-button\">An Interesting Link</button>\n                            <button type=\"button\" class=\"ias-button\">Button 6</button>\n                            <button type=\"button\" class=\"ias-button\">Button 7</button>\n                            <button type=\"button\" class=\"ias-button\">Request Support</button>\n                            <button type=\"button\" class=\"ias-button\">Button 9</button>\n                        </div>\n                    </div>\n                    <div class=\"ias-row\">\n                        <div class=\"ias-column\">\n                            <button type=\"button\" class=\"ias-button\">Button 10</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ias-column ias-align-end\">\n                    <h3 class=\"ias-menu-header\">User Section</h3>\n                    <button type=\"button\" class=\"ias-button\">Help</button>\n                    <button type=\"button\" class=\"ias-button\">Settings</button>\n                    <button type=\"button\" class=\"ias-button\">Log Out</button>\n                </div>\n            </div>\n                <div class=\"ias-row\">\n                <div class=\"ias-column\">\n                    <h3 class=\"ias-menu-header\">Big Section</h3>\n                    <button type=\"button\" class=\"ias-button\">IDM Prototype</button>\n                    <button type=\"button\" class=\"ias-button\">Add Users</button>\n                    <button type=\"button\" class=\"ias-button\">Button 13</button>\n                    <button type=\"button\" class=\"ias-button\">A Button That Extends Well Beyond the Column Immediately Above It</button>\n                    <button type=\"button\" class=\"ias-button\">Button 15</button>\n                    <button type=\"button\" class=\"ias-button\">Micro Focus Branded Sign</button>\n                </div>\n            </div>\n                <div class=\"ias-row ias-border-top\">\n                <div class=\"ias-column\">\n                    <h3 class=\"ias-menu-footer\">VERSION 2.0</h3>\n                </div>\n                <div class=\"ias-column\">\n                    <h3 class=\"ias-menu-footer\">BUILD 123456</h3>\n                </div>\n            </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>With .ias-list</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-menu ias-open\">\n            <div class=\"ias-menu-content\">\n                <div class=\"ias-row ias-border-bottom\">\n                    <div class=\"ias-column\">\n                        <h3 class=\"ias-list-header\">First List</h3>\n                        <ul class=\"ias-list\">\n                            <li tabindex=\"0\">\n                                <div class=\"ias-avatar\"\n                                     style=\"background-image:url(http://hfux.provo.novell.com/~teaming_ux/1Web/testing/AccessUserApp/images/appmarks/search_115.png)\">\n                                </div>\n                                <span>Search</span>\n                            </li>\n                            <li tabindex=\"0\">\n                                <div class=\"ias-avatar\"\n                                     style=\"background-image:url(http://hfux.provo.novell.com/~teaming_ux/1Web/testing/AccessUserApp/images/appmarks/oneDrive_300.png)\">\n                                </div>\n                                <span>OneDrive</span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"ias-row\">\n                    <div class=\"ias-column\">\n                        <h3 class=\"ias-list-header\">Second List</h3>\n                        <ul class=\"ias-list\">\n                            <li tabindex=\"0\">\n                                <div class=\"ias-avatar\"\n                                     style=\"background-image:url(http://hfux.provo.novell.com/~teaming_ux/1Web/testing/AccessUserApp/images/appmarks/geeko_icon.png)\">\n                                </div>\n                                <span>Geeko</span>\n                            </li>\n                            <li tabindex=\"0\">\n                                <div class=\"ias-avatar\"\n                                     style=\"background-image:url(http://hfux.provo.novell.com/~teaming_ux/1Web/testing/AccessUserApp/images/appmarks/VersionOne_115.png)\">\n                                </div>\n                                <span>Version One</span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<h2>Appearance</h2>\n<h3>Menu Specifics</h3>\n    <h5>Implementation</h5>\n    <ul>\n        <li>Menus overlay other page content when toggled to an open state.</li>\n        <li>A complex menu is a combination different menus within a single menu.</li>\n        <li>When creating a menu with more than three items, consider grouping related elements together and adding a\n            dividing line between sections.</li>\n        <li>Menus can use headings to describe separate sections of elements.</li>\n        <li>Menus can be used to display information to the user, however large amounts of information is not\n            appropriate.</li>\n    </ul>\n\n    <h5>Common Patterns</h5>\n    <ul>\n        <li>Menus provide a cohesive list of items that can be used to navigate a product.</li>\n        <li>Menus can provide actions within a page, such as creating new comments, changing a display type, etc.</li>\n    </ul>\n\n<h3>Nesting</h3>\n<h5>Nesting Menus in Other Components</h5>\n    <p class=\"ias-page-instructions\">\n        Menus are paired with a menu toggle button. When a menu toggle button is nested into another\n        component, such as the Nav Bar or comments, the menu associated with the toggle will also been nested.\n    </p>\n<h5>Nestable Components</h5>\n    <ul>\n        <li>Buttons .ias-button</li>\n        <li>Lists .ias-list</li>\n        <li>Avatars .ias-avatar</li>\n        <li>Headings .ias-menu-header, .ias-menu-footer, .ias-list-header</li>\n    </ul>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var NavComponent = (function () {
	    function NavComponent() {
	    }
	    return NavComponent;
	}());
	NavComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(36)
	    })
	], NavComponent);
	exports.default = NavComponent;


/***/ },
/* 36 */
/***/ function(module, exports) {

	var path = 'components/docs/nav/nav.component.html';
	var html = "<h1 class=\"ias-page-title\">Nav</h1>\n\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n    The Nav Bar is a constantly present component that stretches across the width of a page and is fixed to the top.\n    Nav Bars have nested components such as buttons and links that allow for easy navigation between sections of an\n    application or site. Notifications, inputs, and menus are also common elements found in Nav Bars.\n</p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n    To provide users with a constant form of navigation within an application or site.\n</p>\n\n<h2>Examples</h2>\n\n<section>\n    <div class=\"ias-nav\" toggle-repeat-code>\n        <a ui-sref=\"app.component.nav\">Link 1</a>\n        <a ui-sref=\"app.component.nav\">Link 2</a>\n    </div>\n</section>\n\n<section>\n    <h4>.ias-active</h4>\n\n    <div class=\"ias-nav\" toggle-repeat-code>\n        <a ui-sref=\"app.component.nav\">Link 1</a>\n        <a ui-sref=\"app.component.nav\" class=\"ias-active\">Link 2</a>\n        <a ui-sref=\"app.component.nav\">Link 3</a>\n    </div>\n</section>\n\n<section>\n    <h4>Disabled Links</h4>\n\n    <div class=\"ias-nav\" toggle-repeat-code>\n        <button class=\"ias-button ias-icon-button\" disabled=\"disabled\">\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </button>\n        <a ui-sref=\"app.component.nav\">Link 1</a>\n        <a class=\"ias-disabled\">Link 2</a>\n    </div>\n</section>\n\n<section>\n    <h4>Alerts Link</h4>\n\n    <div class=\"ias-nav\" toggle-repeat-code>\n        <a ui-sref=\"app.component.nav\">Link 1</a>\n        <span class=\"ias-fill\"></span>\n        <a ui-sref=\"app.component.nav\"><i class=\"ias-icon ias-icon-status_warn_thick ias-warn\"></i> Alerts (14)</a>\n    </div>\n</section>\n\n<section>\n    <h4>Header (non-navigation)</h4>\n\n    <div class=\"ias-nav\" toggle-repeat-code>\n        <button class=\"ias-button ias-icon-button\">\n            <i class=\"ias-icon ias-icon-hamburger_menu_thick\"></i>\n        </button>\n        <span>Sign in to use available applications.</span>\n        <span class=\"ias-fill\"></span>\n        <button class=\"ias-button ias-icon-button\">\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </button>\n    </div>\n</section>\n\n<h2>Appearance</h2>\n<h3>Nav Bar Specifics</h3>\n    <h5>Implementation</h5>\n    <ul>\n        <li>Nav Bars are fixed to the top of a page as a constant navigational companion to users.</li>\n        <li>Buttons and links are used within Nav Bars to provide navigation between pages of an application or site.\n        </li>\n        <li>Set the selected Nav Bar element to active with .ias-active to indicate where a user is in an application.\n        </li>\n    </ul>\n\n    <h5>Common Patterns</h5>\n    <ul>\n        <li>Nav Bars can use menus which allow the user to access more specific options or settings.</li>\n        <li>The Nav Bar can provide a centralized location for notifications such as alerts.</li>\n        <li>Nav Bar notifications should be used sparingly to keep the Nav Bar clean and not distract the user's focus\n            from the page content.</li>\n    </ul>\n\n<h3>Nesting</h3>\n<h5>Nestable Components</h5>\n    <ul>\n        <li>Form Fields (Input)</li>\n        <li>Icon Buttons (.ias-icon .ias-icon-button)</li>\n        <li>Links (&lt;a&gt;)</li>\n        <li>Spans (Use .ias-fill to create middle spacing)</li>\n    </ul>\n<h5>Nesting Nav Bars in Other Components</h5>\n<p class=\"ias-page-instructions\">\n    Nav Bars will primarily be a component fixed to the top of a page just below the App Bar. Because of this, they are\n    present throughout an application and likely won't need to be nested.\n</p>\n\n<h3>Responsive Displays</h3>\n<p class=\"ias-page-instructions\">\n    A Nav Bar will grow and shrink to the width of a page. If there are many links and buttons, consider writing logic\n    to place them in a drop down menu if the width of the Nav Bar is not wide enough to accommodate each element. If\n    text is present within a span, much like the header example, it will be shorted to make space for buttons and links\n    that may overlap it.\n</p>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var PanelComponent = (function () {
	    function PanelComponent() {
	    }
	    return PanelComponent;
	}());
	PanelComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(38)
	    })
	], PanelComponent);
	exports.default = PanelComponent;


/***/ },
/* 38 */
/***/ function(module, exports) {

	var path = 'components/docs/panel/panel.component.html';
	var html = "<h1 class=\"ias-page-title\">Panel</h1>\n\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n    The panel is a visual component that acts as a general purpose container. Panels are designed to fit the overall\n    design theme and appear cohesively with other components. Information presented within a panel can\n    be customized and divided as needed.\n</p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n    A visual container for displaying information and nested components.\n</p>\n\n<h2>Examples</h2>\n<section>\n    <h3>Default</h3>\n\n    <div class=\"ias-panel\" toggle-repeat-code>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim nisl nec risus cursus cursus.\n        Morbi ex tellus, condimentum a commodo sed, sagittis non massa <a ui-sref=\".\">eget</a>.\n    </div>\n</section>\n\n<section>\n    <h3>.ias-panel-header</h3>\n\n    <div class=\"ias-panel\" toggle-repeat-code>\n        <div class=\"ias-panel-header\">\n            <div class=\"ias-panel-title\">Header</div>\n            <span class=\"ias-fill\"></span>\n            <button class=\"ias-button\">Button</button>\n        </div>\n        <div class=\"ias-panel-body\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim nisl nec risus cursus cursus.\n            Morbi ex tellus, condimentum a commodo sed, sagittis non massa <a ui-sref=\".\">eget</a>.\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>Customization</h3>\n\n    <div toggle-repeat-code>\n        <style>\n            .task-data {\n                display: flex;\n                flex-flow: row nowrap;\n            }\n\n            .task-data > div {\n                flex: 1 1;\n                text-align: center;\n            }\n\n            .task-data-label {\n                font-size: 14px;\n            }\n\n            .task-data-point {\n                color: #007cd0;\n                font-size: 3em;\n            }\n\n            .task-data-point a {\n                color: inherit;\n                padding: 0 5px;\n            }\n\n            .task-expiring .task-data-point {\n                color: darkorange;\n            }\n        </style>\n\n        <div class=\"ias-panel\">\n            <div class=\"ias-panel-header\">\n                <span>My Tasks</span>\n            </div>\n\n            <div class=\"task-data\">\n                <div>\n                    <div class=\"task-data-label\">New Tasks</div>\n                    <div class=\"task-data-point\">\n                        <a ui-sref=\"app.component.panel\">34</a>\n                    </div>\n                </div>\n                <div class=\"task-expiring\">\n                    <div class=\"task-data-label\">Expiring</div>\n                    <div class=\"task-data-point\">\n                        <a class=\"expiring\" ui-sref=\"app.component.panel\">128</a>\n                    </div>\n                </div>\n                <div>\n                    <div class=\"task-data-label\">Claimed</div>\n                    <div class=\"task-data-point\">\n                        <a ui-sref=\"app.component.panel\">34</a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"ias-panel-footer\">\n                <span>Total tasks: <strong>196</strong></span>\n            </div>\n        </div>\n    </div>\n</section>\n\n<h2>Appearance</h2>\n<h3>Panel Specifics</h3>\n    <h5>Common Patterns</h5>\n    <ul>\n        <li>Panels are used as general purpose containers.</li>\n        <li>Most elements and components can be used within a panel.</li>\n        <li>Information within a panel creates a visual grouping that denotes the elements as being related.</li>\n        <li>Components and elements within a panel can be styled to fit the needs of an application.</li>\n        <li>Panels are often used to divide information on a page into separate sections.</li>\n    </ul>\n\n<h3>Nesting</h3>\n    <p class=\"ias-page-instructions\">\n        Panels accept nearly all other components and elements as nestable items. The functionality of a panel is to\n        display nested elements as a group within a container, separating its content from the rest of the page.\n        Panels themselves will likely be their own element on a page.\n    </p>\n\n<h3>Responsive Displays</h3>\n    <p class=\"ias-page-instructions\">\n        As screen width decreases, a panel will also shrink as necessary. When a panel narrows its width, it will wrap\n        nested content in a way that maintains the original look as much as possible.\n    </p>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var SideNavComponent = (function () {
	    function SideNavComponent() {
	    }
	    return SideNavComponent;
	}());
	SideNavComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(40)
	    })
	], SideNavComponent);
	exports.default = SideNavComponent;


/***/ },
/* 40 */
/***/ function(module, exports) {

	var path = 'components/docs/side-nav/side-nav.component.html';
	var html = "<h1 class=\"ias-page-title\">Side Navs</h1>\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n    Side Navs work much like Nav Bars but are fixed to the side of a page instead of the top. Side Navs are used to\n    provide users with a form of navigation within an application. They can be made to be toggleable, allowing a user to\n    hide or show the Side Nav's content. Side Navs can make use of headings to separate listed items, as well as\n    implement avatars to make list items more expressive.\n</p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n    To provide users a toggleable navigation menu fixed to the side of a page.\n</p>\n\n<h2>Examples</h2>\n<h3>Default Side-Nav</h3>\n<section toggle-repeat-code=\"inner\">\n    <demo-content></demo-content>\n    <div class=\"ias-side-nav ias-open\">\n        <div class=\"ias-scrim\"></div>\n        <div class=\"ias-side-nav-content\">\n            <div class=\"ias-side-nav-body\">\n                <button type=\"button\">Home</button>\n                <button type=\"button\">About</button>\n                <button type=\"button\">Products</button>\n                <button type=\"button\">Future Projects</button>\n                <button type=\"button\">Resources</button>\n                <button type=\"button\">Partners</button>\n                <button type=\"button\">Downloads</button>\n                <button type=\"button\">Contact Us</button>\n                <button type=\"button\">Settings</button>\n                <button type=\"button\">Help</button>\n                <button type=\"button\">Logout</button>\n            </div>\n        </div>\n    </div>\n</section>\n\n<h3>Side-Nav with Headings</h3>\n<section toggle-repeat-code=\"inner\">\n    <demo-content></demo-content>\n    <div class=\"ias-side-nav ias-open\">\n        <div class=\"ias-scrim\"></div>\n        <div class=\"ias-side-nav-content\">\n            <div class=\"ias-side-nav-body\">\n                <h3 class=\"ias-side-nav-header\">First Section</h3>\n                <button type=\"button\">Home</button>\n                <button type=\"button\">About</button>\n                <button type=\"button\">Products</button>\n                <button type=\"button\">Future Projects</button>\n                <button type=\"button\">Resources</button>\n                <button type=\"button\">Partners</button>\n                <button type=\"button\">Downloads</button>\n\n                <h3 class=\"ias-side-nav-header\">Second Section</h3>\n                <button type=\"button\">Contact Us</button>\n                <button type=\"button\">Settings</button>\n                <button type=\"button\">Help</button>\n                <button type=\"button\">Logout</button>\n            </div>\n        </div>\n    </div>\n</section>\n\n<h3>Side-Nav with Avatars</h3>\n<section toggle-repeat-code=\"inner\">\n    <demo-content></demo-content>\n    <div class=\"ias-side-nav ias-open\">\n        <div class=\"ias-scrim\"></div>\n        <div class=\"ias-side-nav-content\">\n            <div class=\"ias-side-nav-body\">\n                <ul class=\"ias-list\">\n                    <li tabindex=\"0\">\n                        <div class=\"ias-avatar\"\n                             style=\"background-image:url(images/appmarks/mark_02.png)\">\n                        </div>\n                        <span>Search</span>\n                    </li>\n                    <li tabindex=\"0\">\n                        <div class=\"ias-avatar\"\n                             style=\"background-image:url(images/appmarks/mark_03.png)\">\n                        </div>\n                        <span>OneDrive</span>\n                    </li>\n                    <li tabindex=\"0\">\n                        <div class=\"ias-avatar\"\n                             style=\"background-image:url(images/appmarks/mark_01.png)\">\n                        </div>\n                        <span>Geeko</span>\n                    </li>\n                    <li tabindex=\"0\">\n                        <div class=\"ias-avatar\"\n                             style=\"background-image:url(images/appmarks/mark_04.png)\">\n                        </div>\n                        <span>Version One</span>\n                    </li>\n                    <li tabindex=\"0\">\n                        <div class=\"ias-avatar\"\n                             style=\"background-image:url(images/appmarks/mark_02.png)\">\n                        </div>\n                        <span>Search</span>\n                    </li>\n                    <li tabindex=\"0\">\n                        <div class=\"ias-avatar\"\n                             style=\"background-image:url(images/appmarks/mark_03.png)\">\n                        </div>\n                        <span>OneDrive</span>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</section>\n\n<h2>Appearance</h2>\n<h3>Side Nav Specifics</h3>\n    <h5>Implementation</h5>\n    <ul>\n        <li>Side Navs are fixed to the side of a page and allow another form of navigation to the user.</li>\n        <li>When a hidden Side Nav is toggled open, a dialog glass appears over the other page content to bring focus to\n            the list of contents.</li>\n    </ul>\n\n    <h5>Common Patterns</h5>\n    <ul>\n        <li>Side Navs can be made toggleable to either hide or show their content.</li>\n        <li>A smaller display would benefit from having a toggleable Side Nav, allowing more room for page content.</li>\n        <li>Side Navs can make use of section headings to separate content into meaningful sections to a user.</li>\n        <li>Avatar images can also be used within a Side Nav to give recognizable images and logos to listed items.</li>\n    </ul>\n\n<h3>Nesting</h3>\n    <h5>Nestable Components</h5>\n    <ul>\n        <li>Buttons</li>\n        <li>Divs (Creates sections for avatar images)</li>\n        <li>Headers (Separate sections of Side Nav with descriptive header)</li>\n        <li>List items &lt;li&gt;</li>\n        <li>Spans</li>\n    </ul>\n\n    <h5>Nesting Side Navs in Other Components</h5>\n    <p class=\"ias-page-instructions\">\n        Side Navs are a constant element that is fixed to the side of a page and is available throughout an\n        application. Because of this, it is not likely a Side Nav would be nested within another element. In these\n        situations, nesting a menu instead of a Side Nav will likely be more appropriate.\n    </p>\n\n<h3>Responsive Display</h3>\n    <p class=\"ias-page-instructions\">\n        Side Navs should be toggleable depending on the width of the current display. Larger displays will allow for a\n        Side Nav to be open and fixed to the side of the window. As display width decreases, a Side Nav will become\n        toggleable to allow more space for page content.\n    </p>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var SideNavUIComponent = (function () {
	    function SideNavUIComponent($element, toggleService) {
	        this.$element = $element;
	        this.toggleService = toggleService;
	        this.open = false;
	    }
	    SideNavUIComponent.prototype.$onInit = function () {
	        this.toggleService.register(this);
	    };
	    SideNavUIComponent.prototype.$onDestroy = function () {
	        this.$element.off('click');
	    };
	    SideNavUIComponent.prototype.hide = function () {
	        this.$element.removeClass('ias-open');
	        this.open = false;
	    };
	    SideNavUIComponent.prototype.show = function () {
	        this.$element.addClass('ias-open');
	        this.open = true;
	    };
	    return SideNavUIComponent;
	}());
	SideNavUIComponent.$inject = ['$element', 'IasToggleService'];
	SideNavUIComponent = __decorate([
	    component_decorator_1.Component({
	        bindings: {
	            name: '@'
	        },
	        templateUrl: __webpack_require__(42),
	        transclude: true
	    })
	], SideNavUIComponent);
	exports.default = SideNavUIComponent;


/***/ },
/* 42 */
/***/ function(module, exports) {

	var path = 'components/components/side-nav/side-nav.component.html';
	var html = "<div class=\"ias-scrim\" ng-click=\"$ctrl.hide()\"></div>\n<div class=\"ias-side-nav-content\">\n    <div class=\"ias-side-nav-body\" ng-transclude></div>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var TabComponent = (function () {
	    function TabComponent() {
	    }
	    return TabComponent;
	}());
	TabComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(44)
	    })
	], TabComponent);
	exports.default = TabComponent;


/***/ },
/* 44 */
/***/ function(module, exports) {

	var path = 'components/docs/tab/tab.component.html';
	var html = "<h1 class=\"ias-page-title\">Tabs</h1>\n\n<h2>General</h2>\n    <p class=\"ias-page-instructions\">\n        A tab set is a navigational component that exists within a page and hides or displays content specific to each\n\t\ttab.  Tab sets are usually tied to a container that displays the information associated with individual tabs.\n        Clicking a tab will set it as activate and display its information in the associated container. Tabs work much\n        like a horizontal accordion control, however it can only have one active element at a time.\n    </p>\n\n<h2>Purpose</h2>\n    <p class=\"ias-page-instructions\">\n        A navigational component used to hide or display content of a page.\n    </p>\n\n<h2>Examples</h2>\n<section>\n\t<h3>Default</h3>\n\t<div class=\"ias-tabset\" toggle-repeat-code>\n\t\t<div class=\"ias-tab ias-active\" tabindex=\"0\">Tab 1</div>\n\t\t<div class=\"ias-tab\" tabindex=\"0\">Tab 2</div>\n\t\t<div class=\"ias-tab\" tabindex=\"0\">Tab 3</div>\n\t\t<div class=\"ias-tab ias-disabled\">Tab 4</div>\n\t</div>\n</section>\n<section>\n\t<h3>Tabs with text link</h3>\n\t<div class=\"ias-tabset\" toggle-repeat-code>\n\t\t<div class=\"ias-tab\" tabindex=\"0\" title=\"Short Label\">Short Label</div>\n\t\t<div class=\"ias-tab ias-active\" title=\"A bit longer label\">A bit longer label</div>\n\t\t<div class=\"ias-tab\" tabindex=\"0\" title=\"A really long label to show width\">A really long label to show width</div>\n\t\t<div class=\"ias-fill\"></div>\n\t\t<a ui-sref=\".\">Action link</a>\n\t</div>\n</section>\n<section>\n\t<h3>Tabs with .ias-icon-button</h3>\n\t<div class=\"ias-tabset\" toggle-repeat-code>\n\t\t<div class=\"ias-tab\" tabindex=\"0\">Tab 1</div>\n\t\t<div class=\"ias-tab\" tabindex=\"0\">Tab 2</div>\n\t\t<div class=\"ias-tab ias-active\">Tab 3</div>\n\t\t<div class=\"ias-tab ias-disabled\">Tab 4</div>\n\t\t<div class=\"ias-fill\"></div>\n\t\t<button class=\"ias-button ias-icon-button\" type=\"button\">\n\t\t\t<i class=\"ias-icon ias-icon-favorite_outline_thin\"></i>\n\t\t</button>\n\t</div>\n</section>\n\n<h2>Appearance</h2>\n<h3>Tab Specifics</h3>\n    <h5>Implementations</h5>\n    <ul>\n        <li>A selected tab will have the class .ias-active.</li>\n        <li>Disabled tabs will have the class .ias-disabled, resulting in the greyed out, un-selectable tab.</li>\n        <li>Tab sets can include links and icon buttons to add more functionality.</li>\n    </ul>\n    <h5>Common Patterns</h5>\n    <ul>\n        <li>Tab sets show and hide content within a page, allowing users to navigate separate sets of information.</li>\n    </ul>\n\n<h3>Nesting</h3>\n    <h5>Nestable Components</h5>\n    <ul>\n        <li>Icon Buttons .ias-icon-button</li>\n        <li>Links &lt;a&gt;</li>\n    </ul>\n\n    <h5>Nesting Tabs in Other Components</h5>\n    <p class=\"ias-page-instructions\">\n        Tabs are a navigational component and can be nested within a page where navigation of different sets of data\n        would be useful. Tabs navigational capabilities are restricted to a single page and the content of that page.\n    </p>\n\n<h3>Responsive Displays</h3>\n    <p class=\"ias-page-instructions\">\n        As the display width becomes smaller, tabs reduce their width and the text within until reaching a minimum\n        width. Text reduced in this way reduces the displayed text and append ellipses at the end. Links and icons will\n        remain on the right side of the tab set as much as possible. If a tab set's minimum width, (all tabs are reduce\n        to minimum size) is larger than the display width they will begin to be cut off.\n    </p>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var TableComponent = (function () {
	    function TableComponent() {
	    }
	    return TableComponent;
	}());
	TableComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(46)
	    })
	], TableComponent);
	exports.default = TableComponent;


/***/ },
/* 46 */
/***/ function(module, exports) {

	var path = 'components/docs/table/table.component.html';
	var html = "<h1 class=\"ias-page-title\">Table</h1>\n\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n    Tables are lists in which the individual items have common elements with each other. The rows of a table\n    represent each item of the list and its different elements. Item elements are divided into columns with\n    descriptive headings that describe each column of information.\n</p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n    Visually organize related items of information within a single component.\n</p>\n\n<h2>Examples</h2>\n<section>\n    <h3>Default</h3>\n\n    <table class=\"ias-table\" toggle-repeat-code>\n        <thead>\n        <tr>\n            <th>Name</th>\n            <th>Title</th>\n            <th>Phone</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Jonathan Smithsonian</a></td>\n            <td>Asst. to the UX Director</td>\n            <td>(801) 867-5309</td>\n        </tr>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Camelot Rinkus</a></td>\n            <td>The Valiant</td>\n            <td>(801) 877-5500</td>\n        </tr>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Christian Pledger</a></td>\n            <td>Destroyer of Worlds</td>\n            <td>(801) 540-9221</td>\n        </tr>\n        </tbody>\n    </table>\n</section>\n\n<section>\n    <h3>.ias-icon</h3>\n\n    <table class=\"ias-table\" toggle-repeat-code>\n        <thead>\n        <tr>\n            <th>Name</th>\n            <th>Title</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td>\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n                <a ui-sref=\"app.component.table\">Jonathan Smithsonian</a>\n            </td>\n            <td>Asst. to the UX Director</td>\n        </tr>\n        <tr>\n            <td>\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n                <a ui-sref=\"app.component.table\">Camelot Rinkus</a>\n            </td>\n            <td>The Valiant</td>\n        </tr>\n        <tr>\n            <td>\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n                <a ui-sref=\"app.component.table\">Christian Pledger</a>\n            </td>\n            <td>Destroyer of Worlds</td>\n        </tr>\n        </tbody>\n    </table>\n</section>\n\n<section>\n    <h3>.ias-sorted</h3>\n\n    <table class=\"ias-table\" toggle-repeat-code>\n        <thead>\n        <tr>\n            <th class=\"ias-sortable ias-sorted\">Name <i class=\"ias-icon ias-icon-flow_goto_prev_thin\"></i></th>\n            <th>Title</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Camelot Rinkus</a></td>\n            <td>The Valiant</td>\n        </tr>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Christian Pledger</a></td>\n            <td>Destroyer of Worlds</td>\n        </tr>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Jonathan Smithsonian</a></td>\n            <td>Asst. to the UX Director</td>\n        </tr>\n        </tbody>\n    </table>\n</section>\n\n<section>\n    <h3>.ias-align-end</h3>\n\n    <table class=\"ias-table\" toggle-repeat-code>\n        <thead>\n        <tr>\n            <th>Name</th>\n            <th class=\"ias-align-end\">Owes</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Jonathan Smithsonian</a></td>\n            <td class=\"ias-align-end\">$10.21</td>\n        </tr>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Camelot Rinkus</a></td>\n            <td class=\"ias-align-end\">$1000.21</td>\n        </tr>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Christian Pledger</a></td>\n            <td class=\"ias-align-end\">$100.21</td>\n        </tr>\n        </tbody>\n    </table>\n</section>\n\n<section>\n    <h3>Actions</h3>\n\n    <table class=\"ias-table\" toggle-repeat-code>\n        <thead>\n        <tr>\n            <th>Name</th>\n            <th class=\"ias-align-end\">Owes</th>\n            <th>Actions</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Jonathan Smithsonian</a></td>\n            <td class=\"ias-align-end\">$10.21</td>\n            <td class=\"ias-actions\">\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-close_thick\"></i>\n                </button>\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-new_thick\"></i>\n                </button>\n            </td>\n        </tr>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Camelot Rinkus</a></td>\n            <td class=\"ias-align-end\">$1000.21</td>\n            <td class=\"ias-actions\">\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-close_thick\"></i>\n                </button>\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-new_thick\"></i>\n                </button>\n            </td>\n        </tr>\n        <tr>\n            <td><a ui-sref=\"app.component.table\">Christian Pledger</a></td>\n            <td class=\"ias-align-end\">$100.21</td>\n            <td class=\"ias-actions\">\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-close_thick\"></i>\n                </button>\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-new_thick\"></i>\n                </button>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n</section>\n\n<section>\n    <h3>Checkboxes</h3>\n\n    <table class=\"ias-table\" toggle-repeat-code>\n        <thead>\n        <tr>\n            <th><input type=\"checkbox\" title=\"Select item\"></th>\n            <th class=\"ias-sortable ias-sorted\">Name <i class=\"ias-icon ias-icon-flow_goto_next_thin\"></i></th>\n            <th>Description</th>\n        </tr>\n        </thead>\n       <tbody>\n       <tr tabindex=\"0\">\n           <td><input type=\"checkbox\" title=\"Select item\"></td>\n           <td><a href=\"#\">Associate Software Engineer</a></td>\n           <td>Associate Software Engineer</td>\n       </tr>\n       <tr tabindex=\"0\">\n           <td><input type=\"checkbox\" title=\"Select item\"></td>\n           <td><a href=\"#\">Compliance Administrator</a></td>\n           <td>A domain administrator who has the full range of</td>\n       </tr>\n       <tr tabindex=\"0\">\n           <td><input type=\"checkbox\" title=\"Select item\"></td>\n           <td><a href=\"#\">Doctor</a></td>\n           <td>Doctor Role</td>\n       </tr>\n       <tr tabindex=\"0\">\n           <td><input type=\"checkbox\" title=\"Select item\"></td>\n           <td><a href=\"#\">Provisioning Administrator</a></td>\n           <td>Mon Aug 10 16:31:05 GMT-600 2015</td>\n       </tr>\n       </tbody>\n    </table>\n</section>\n\n<section>\n    <h3>Configuration</h3>\n\n    <table class=\"ias-table\" toggle-repeat-code>\n        <thead>\n        <tr>\n            <th>Name</th>\n            <th>Description</th>\n            <th class=\"ias-align-end\">\n                <button class=\"ias-button ias-icon-button\" type=\"button\" title=\"Configure table\">\n                    <i class=\"ias-icon ias-icon-configure_thick\"></i>\n                </button>\n            </th>\n        </tr>\n        </thead>\n       <tbody>\n       <tr>\n           <td><a href=\"#\">Associate Software Engineer</a></td>\n           <td>Associate Software Engineer</td>\n           <td></td>\n       </tr>\n       <tr>\n           <td><a href=\"#\">Compliance Administrator</a></td>\n           <td>A domain administrator who has the full range of</td>\n           <td></td>\n       </tr>\n       <tr>\n           <td><a href=\"#\">Doctor</a></td>\n           <td>Doctor Role</td>\n           <td></td>\n       </tr>\n       <tr>\n           <td><a href=\"#\">Provisioning Administrator</a></td>\n           <td>Mon Aug 10 16:31:05 GMT-600 2015</td>\n           <td></td>\n       </tr>\n       </tbody>\n    </table>\n</section>\n\n<h2>Appearance</h2>\n<h3>Table Specifics</h3>\n    <h5>Implementation</h5>\n    <ul>\n        <li>Column headings describe the information found in the column.</li>\n        <li>Columns can be made sortable by adding .ias-sortable which sorts information in ascending or descending\n            order when clicked.</li>\n        <li>.ias-align-end right aligns text within the table cell.</li>\n        <li>Action icon-buttons can be added to rows to allow for more options to edit row data.</li>\n    </ul>\n\n    <h5>Common Patterns</h5>\n    <ul>\n        <li>The most recognizable element of a row is placed in the first column where most readers will start scanning.\n        </li>\n        <li>Icons can be added the first column to help identify important rows of information.</li>\n        <li>Numerical values will often use .ias-align-end to be displayed as right aligned in a table cell.</li>\n        <li>Checkboxes allow users to select multiple rows of data at once.</li>\n        <li>A checkbox in the header signifies a \"select all\" checkbox.</li>\n    </ul>\n\n<h3>Nesting</h3>\n    <h5>Nestable Components</h5>\n    <ul>\n        <li>Icons .ias-icon</li>\n        <li>Icon Buttons .ias-icon-button</li>\n        <li>Inputs (Checkboxes)</li>\n        <li>Links &lt;a&gt;</li>\n    </ul>\n\n    <h5>Nesting Tables in Other Components</h5>\n    <p class=\"ias-page-instructions\">\n        Tables are a component used to organize information in an visually recognizable format and can be implemented in\n        many places throughout an application. A component with a moderately sized amount of information could make use\n        of a table to organize that information.\n    </p>\n\n<h3>Responsive Displays</h3>\n    <p class=\"ias-page-instructions\">\n        As the display width decreases a table will also reduce its width. If the text exceeds the width of the table\n        cell containing it, it will be wrapped to a new line and the cell will increase its height.\n    </p>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var TileComponent = (function () {
	    function TileComponent() {
	    }
	    return TileComponent;
	}());
	TileComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(48)
	    })
	], TileComponent);
	exports.default = TileComponent;


/***/ },
/* 48 */
/***/ function(module, exports) {

	var path = 'components/docs/tile/tile.component.html';
	var html = "<h1 class=\"ias-page-title\">Tiles</h1>\n\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n    Tiles are a navigation component that allow a user to access pages, applications, and other data within a product.\n    At minimum, a tile should possess a recognizable avatar or icon image. Tiles may also be given titles, descriptions,\n    and a favorite icon depending on the size of the tile.\n</p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n    A navigational component that can be grouped and has recognizable elements.\n</p>\n\n<h2>Examples</h2>\n<section>\n    <h3>.ias-tiny</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>.ias-small</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Turquoise Brand</h3>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n            <div class=\"ias-tile-content\">\n                <h3>Search</h3>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>.ias-medium</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Turquoise Brand</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n            <div class=\"ias-tile-content\">\n                <h3>Search</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim nisl nec risus cursus cursus. Morbi ex tellus, condimentum a commodo sed, sagittis non</p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h3>.ias-large</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Turquoise Brand</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n            <div class=\"ias-tile-content\">\n                <h3>Search</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim nisl nec risus cursus cursus. Morbi ex tellus, condimentum a commodo sed, sagittis non</p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<h2>Appearance</h2>\n<h3>Tile Specifics</h3>\n    <h5>Implementation</h5>\n    <ul>\n        <li>Every tile will contain at least an avatar or icon image.</li>\n        <li>Tiny Tiles will only have the avatar and icon image.</li>\n        <li>Small Tiles add a title to the tile</li>\n        <li>Medium Tiles will have a title as well as a brief description.</li>\n        <li>Large Tiles increase the size of the icon and avatar images, but still contain the title and description of\n            the medium variation.</li>\n    </ul>\n\n<h3>Nesting</h3>\n    <h5>Nestable Components</h5>\n    <ul>\n        <li>Avatars .ias-avatar</li>\n        <li>Headings &lt;h3&gt;</li>\n        <li>Icons .ias-icon</li>\n        <li>Paragraphs &lt;p&gt;</li>\n    </ul>\n\n<h3>Responsive Displays</h3>\n<p class=\"ias-page-instructions\">\n    Horizontally grouped tiles such as in the .ias-tiny example will row wrap as screen width decreases.\n</p>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var TileGridComponent = (function () {
	    function TileGridComponent() {
	    }
	    return TileGridComponent;
	}());
	TileGridComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(50)
	    })
	], TileGridComponent);
	exports.default = TileGridComponent;


/***/ },
/* 50 */
/***/ function(module, exports) {

	var path = 'components/docs/tile-grid/tile-grid.component.html';
	var html = "<h1 class=\"ias-page-title\">Tile Grids</h1>\n\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n    Tile grids are the basic layout for a group of tiles within a product. To create a horizontal grouping of tiles use\n    .ias-grid. When creating a vertical tile grouping use .ias-grid and .ias-stacked.\n</p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n    Create a group of tiles.\n</p>\n\n<section class=\"grid-tiny\">\n    <h3>Tiny .ias-grid</h3>\n\n    <div class=\"ias-grid\" toggle-repeat-code>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_01.png)\">\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_05.png)\">\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_06.png)\">\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_08.png)\">\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_07.png)\">\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"list-tiny\">\n    <h3>Tiny .ias-grid .ias-stacked</h3>\n\n    <div class=\"ias-grid ias-stacked\" toggle-repeat-code>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_01.png)\">\n            </div>\n        </div>\n        <div class=\"ias-tile ias-tiny\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"grid-small\">\n    <h3>Small .ias-grid</h3>\n\n    <div class=\"ias-grid\" toggle-repeat-code>\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Turquoise Brand</h3>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Blue Co.</h3>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                   style=\"background-image:url(images/appmarks/mark_01.png)\">\n        </div>\n            <div class=\"ias-tile-content\">\n                <h3>Green Business</h3>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Rojo Co</h3>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"list-small\">\n    <h3>Small .ias-grid .ias-stacked</h3>\n\n    <div class=\"ias-grid ias-stacked\" toggle-repeat-code>\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Turquoise Brand</h3>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Blue Co.</h3>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_01.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Green Business</h3>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-small\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Rojo Co</h3>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"grid-medium\">\n    <h3>Medium .ias-grid</h3>\n\n    <div class=\"ias-grid\" toggle-repeat-code>\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Turquoise Brand</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Blue Co.</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_01.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Green Business</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Rojo Co</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"list-medium\">\n    <h3>Medium .ias-grid .ias-stacked</h3>\n\n    <div class=\"ias-grid ias-stacked\" toggle-repeat-code>\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Turquoise Brand</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Blue Co.</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_01.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Green Business</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-medium\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Rojo Co</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"grid-large\">\n    <h3>Large .ias-grid</h3>\n\n    <div class=\"ias-grid\" toggle-repeat-code>\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Turquoise Brand</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Blue Co.</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_01.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Green Business</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Rojo Co</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"list-large\">\n    <h3>Large .ias-grid .ias-stacked</h3>\n\n    <div class=\"ias-grid ias-stacked\" toggle-repeat-code>\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_02.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Turquoise Brand</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n            <div class=\"ias-actions\">\n                <i class=\"ias-icon ias-icon-favorite_fill\"></i>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_03.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Blue Co.</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_01.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Green Business</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n        <div class=\"ias-tile ias-large\" tabindex=\"0\">\n            <div class=\"ias-avatar\"\n                 style=\"background-image:url(images/appmarks/mark_04.png)\">\n            </div>\n            <div class=\"ias-tile-content\">\n                <h3>Rojo Co</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<h2>Appearance</h2>\n<h3>Tile Grid Specifics</h3>\n    <h5>Implementation</h5>\n    <ul>\n        <li>Horizontally grouped tiles (.ias-grid) is the default grouping.</li>\n        <li>Vertically grouped tiles requires both .ias-grid and .ias-stacked.</li>\n    </ul>\n\n<h3>Responsive Displays</h3>\n<p class=\"ias-page-instructions\">\n    As the screen width decreases a horizontal group of tiles will begin to row wrap elements to a horizontal row below\n    the original row.\n</p>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	function ToggleDirective(toggleService) {
	    return {
	        link: function (scope, element, attrs) {
	            element.on('click', function () { toggleService.toggleComponent(attrs['iasToggle'], element); });
	        },
	        restrict: 'A'
	    };
	}
	exports.ToggleDirective = ToggleDirective;
	ToggleDirective.$inject = ['IasToggleService'];


/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ToggleService = (function () {
	    function ToggleService() {
	        this.toggleableComponents = {};
	    }
	    ToggleService.prototype.hideComponent = function (componentId) {
	        var toggleableElement = this.toggleableComponents[componentId];
	        if (toggleableElement == null) {
	            return;
	        }
	        toggleableElement.hide();
	    };
	    ToggleService.prototype.register = function (toggleableComponent) {
	        this.toggleableComponents[toggleableComponent.name] = toggleableComponent;
	    };
	    ToggleService.prototype.toggleComponent = function (componentId, element) {
	        var toggleableElement = this.toggleableComponents[componentId];
	        if (toggleableElement == null) {
	            return;
	        }
	        if (!toggleableElement.open) {
	            toggleableElement.show(element);
	        }
	        else {
	            toggleableElement.hide();
	        }
	    };
	    return ToggleService;
	}());
	exports.default = ToggleService;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var MultiValuedInputComponent = (function () {
	    function MultiValuedInputComponent() {
	    }
	    return MultiValuedInputComponent;
	}());
	MultiValuedInputComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(54)
	    })
	], MultiValuedInputComponent);
	exports.default = MultiValuedInputComponent;


/***/ },
/* 54 */
/***/ function(module, exports) {

	var path = 'components/docs/multi-valued-input/multi-valued-input.component.html';
	var html = "<h1>Multi Valued Input</h1>\n<p class=\"ias-page-instructions\">Multi Valued input allows you to add and remove tags. If the input field is a search box then you can search for the tags already\navailable that you can add.</p>\n<h3>Search Input</h3>\n<div class=\"text\">Action:</div>\n<div class=\"ias-multi-valued\" toggle-repeat-code=\"\">\n    <div class=\"ias-input-container ias-search ias-search-multi\">\n        <input type=\"text\" placeholder=\"Search\" autocomplete=\"on\">\n        <i class=\"ias-icon ias-icon-search_thick\"></i>\n        <button class=\"ias-button ias-icon-button\"><i class=\"ias-icon ias-icon-close_thick\"></i></button>\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Person One</p>\n            <button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-close_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Person With a Really Long Name</p>\n            <button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-close_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Another Person</p>\n            <button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-close_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">untitled_folder</p>\n            <button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-close_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">lucky_folder_that_got_named</p>\n            <button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-close_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n</div>\n\n<h3 class=\"multi-valued-title\">Open Search Input</h3>\n<div class=\"text\">Action:</div>\n<div class=\"ias-multi-valued-open\" toggle-repeat-code=\"\">\n    <div class=\"ias-input-container ias-search ias-search-multi\">\n        <input type=\"text\" placeholder=\"Search\" autocomplete=\"on\">\n        <i class=\"ias-icon ias-icon-search_thick\"></i>\n        <button class=\"ias-button ias-icon-button\"><i class=\"ias-icon ias-icon-close_thick\"></i></button>\n    </div>\n    <div class=\"ias-search-multi-open\"><p class=\"multi-search-text\">Search Result 1</p>\n        <p class=\"multi-search-text\">Search Result 2</p>\n        <p class=\"multi-search-text\">Search Result 3</p>\n        <p class=\"multi-search-text\">Search Result 4</p>\n        <p class=\"multi-search-text\">Search Result 5</p>\n    </div>\n    <div class=\"ias-search-multi-open-tags\">\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Person One</p><button class=\"ias-button-close-multi\">\n                <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Person With a Really Really Really Long Name</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Another Person</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">this_is_an_untitled_folder</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">untitled</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">lucky_folder_that_got_named</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Person One Is Cool Cool Cool</p><button class=\"ias-button-close-multi\">\n                <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Person With a Really Really Really Long Name</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Another Person</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">this_is_an_untitled_folder</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">untitled</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n        <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n            <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">lucky_folder_that_got_named</p>\n                <button class=\"ias-button-close-multi\">\n                    <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n        </div>\n    </div>\n</div>\n\n<h3>Input</h3>\n<div class=\"text\">Action:</div>\n<div class=\"ias-multi-valued\" toggle-repeat-code>\n    <div class=\"ias-input-multi\">\n        <input type=\"text\" name=\"username\" autocomplete=\"on\">\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Person One</p><button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Person With a Really Long Name</p>\n            <button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-user_thin ias-icon-multi\"></i><p class=\"tile-text\">Another Person</p>\n            <button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">untitled_folder</p>\n            <button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n    <div class=\"ias-tile ias-tile-multi\" tabindex=\"0\">\n        <div class=\"ias-tile-content-multi\"><i class=\"ias-icon ias-icon-folder_thin ias-icon-multi\"></i><p class=\"tile-text\">lucky_folder_that_got_named</p>\n            <button class=\"ias-button-close-multi\">\n            <i class=\"ias-icon ias-icon-new_thin ias-icon-close-multi\"></i></button></div>\n    </div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var TagsComponent = (function () {
	    function TagsComponent() {
	    }
	    return TagsComponent;
	}());
	TagsComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(56)
	    })
	], TagsComponent);
	exports.default = TagsComponent;


/***/ },
/* 56 */
/***/ function(module, exports) {

	var path = 'components/docs/tags/tags.component.html';
	var html = "<h1 class=\"ias-page-title\">Tags</h1>\n\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n    Tags are representations of strings and other objects associated with an item. Tags can act as keywords for an\n    object to help identify its elements; or, as search filters to help users locate specific items within an\n    application. Icon buttons can be nested in a tag to increase the tag's functionality.\n</p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n    Show an association between the information of a tag and the component it is tied to.\n</p>\n\n<h2>Examples</h2>\n<div class=\"ias-tags\">\n    <h3>Text Only</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-tag\" tabindex=\"0\">\n            <span class=\"ias-tag-content\">Person One</span>\n        </div>\n        <div class=\"ias-tag\" tabindex=\"0\">\n            <span class=\"ias-tag-content\">Person With a Really Long Name</span>\n        </div>\n        <div class=\"ias-tag\" tabindex=\"0\">\n            <span class=\"ias-tag-content\">Another Person</span>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"ias-tags\">\n    <h3>Text with Actions</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-tag\" tabindex=\"0\">\n            <span class=\"ias-tag-content\">Person One</span>\n            <button class=\"ias-button ias-icon-button\"><i class=\"ias-icon ias-icon-close_thin\"></i></button>\n        </div>\n\n        <div class=\"ias-tag\" tabindex=\"0\">\n            <span class=\"ias-tag-content\">Person With a Really Long Name</span>\n            <button class=\"ias-button ias-icon-button\"><i class=\"ias-icon ias-icon-close_thin\"></i></button>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"ias-tags\">\n    <h3>Text with Actions and Icon</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-tag\" tabindex=\"0\">\n            <span class=\"ias-tag-content\">\n                <i class=\"ias-icon ias-icon-user_thin\"></i> Person One\n            </span>\n            <button class=\"ias-button ias-icon-button\"><i class=\"ias-icon ias-icon-new_thin\"></i></button>\n        </div>\n\n        <div class=\"ias-tag\" tabindex=\"0\">\n            <span class=\"ias-tag-content\">\n                <i class=\"ias-icon ias-icon-folder_thin\"></i> lucky_folder_that_got_named\n            </span>\n            <button class=\"ias-button ias-icon-button\"><i class=\"ias-icon ias-icon-new_thin\"></i></button>\n        </div>\n    </div>\n</div>\n\n<h2>Appearance</h2>\n<h3>Tag Specifics</h3>\n    <h5>Implementation</h5>\n    <ul>\n        <li>A tag that is click-able should not have a nested icon-button.</li>\n        <li>Click-able components should never have other click-able components nested within them.</li>\n        <li>Limit nested icon buttons to only one per tag.</li>\n    </ul>\n\n    <h5>Common Patterns</h5>\n    <ul>\n        <li>Tags can be used to visually represent applied filters to a search input.</li>\n        <li>Search filter tags include a close icon button that allows the user to remove the filter through the tag.\n        </li>\n        <li>Tags can represent keywords to show what elements the associated product or page has.</li>\n        <li>People tied to a product or email can also be displayed with tags.</li>\n    </ul>\n\n<h3>Nesting</h3>\n    <h5>Nestable Components</h5>\n        <ul>\n            <li>Icons .ias-icon</li>\n            <li>Icon Buttons .ias-icon-button</li>\n            <li>Spans &lt;span&gt;</li>\n        </ul>\n\n    <h5>Nesting Tags in Other Components</h5>\n    <p class=\"ias-page-instructions\">\n        Tags are a prevalent component used throughout applications. They can be found tied to search inputs as filters,\n        within email messages as recipients, at the bottom of a product page as item identifiers and many other places.\n        Nest tags within components that will benefit from having a visual representation of keywords available to the\n        user.\n    </p>\n\n<h3>Responsive Displays</h3>\n    <p class=\"ias-page-instructions\">\n        As display width becomes smaller tags will begin to row wrap to fit more comfortably on the screen. If the\n        screen width is smaller than the tag then the tag will decrease its width down to a minimum width. When a screen\n        reduces a tag's width, the text inside is also reduced and ellipses are added to the end of the text.\n    </p>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var DatepickerComponent = (function () {
	    function DatepickerComponent() {
	    }
	    return DatepickerComponent;
	}());
	DatepickerComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(58)
	    })
	], DatepickerComponent);
	exports.default = DatepickerComponent;


/***/ },
/* 58 */
/***/ function(module, exports) {

	var path = 'components/docs/datepicker/datepicker.component.html';
	var html = "<h1 class=\"ias-page-title\">Datepicker</h1>\n\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n    A datepicker is an interactive calendar overlay that allows for user to easily input a desired date. Datepickers\n    are tied to a standard input field that takes input from the interactive calendar. A user can click into a\n    similar month picker by clicking the month/ year in the datepicker title bar.\n</p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n    Allow a user to choose a date from a familiar calendar representation.\n</p>\n\n<h2>Examples</h2>\n<section>\n    <h3>Closed Datepicker</h3>\n\n    <button class=\"ias-button ias-icon-button\" type=\"button\" toggle-repeat-code>\n        <i class=\"ias-icon ias-icon-date_thick\"></i>\n    </button>\n    <a ui-sref=\"app.component.datepicker\" class=\"ias-link-icon\" toggle-repeat-code>\n        <span>06/29/2017</span>\n        <i class=\"ias-icon ias-icon-date_thick\"></i>\n    </a>\n    <button type=\"button\" class=\"ias-button ias-icon-text-button\" toggle-repeat-code>\n        <span>06/29/2017</span>\n        <i class=\"ias-icon ias-icon-date_thick\"></i>\n    </button>\n</section>\n\n<section>\n    <h3>Open Datepicker</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <button class=\"ias-button ias-icon-button\" type=\"button\">\n            <i class=\"ias-icon ias-icon-date_thick\"></i>\n        </button>\n        <div class=\"ias-datepicker\">\n            <div class=\"ias-actions\">\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-prev_left_thin\"></i>\n                </button>\n                <span tabindex=\"0\">June 2017</span>\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-next_right_thin\"></i>\n                </button>\n            </div>\n            <table>\n                <thead>\n                <tr>\n                    <th>S</th>\n                    <th>M</th>\n                    <th>T</th>\n                    <th>W</th>\n                    <th>T</th>\n                    <th>F</th>\n                    <th>S</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                    <td tabindex=\"0\" class=\"ias-soften\">28</td>\n                    <td tabindex=\"0\" class=\"ias-soften\">29</td>\n                    <td tabindex=\"0\" class=\"ias-soften\">30</td>\n                    <td tabindex=\"0\" class=\"ias-soften\">31</td>\n                    <td tabindex=\"0\">1</td>\n                    <td tabindex=\"0\">2</td>\n                    <td tabindex=\"0\">3</td>\n                </tr>\n                <tr>\n                    <td tabindex=\"0\">4</td>\n                    <td tabindex=\"0\">5</td>\n                    <td tabindex=\"0\">6</td>\n                    <td tabindex=\"0\">7</td>\n                    <td tabindex=\"0\">8</td>\n                    <td tabindex=\"0\">9</td>\n                    <td tabindex=\"0\">10</td>\n                </tr>\n                <tr>\n                    <td tabindex=\"0\">11</td>\n                    <td tabindex=\"0\">12</td>\n                    <td tabindex=\"0\">13</td>\n                    <td tabindex=\"0\">14</td>\n                    <td tabindex=\"0\">15</td>\n                    <td tabindex=\"0\">16</td>\n                    <td tabindex=\"0\">17</td>\n                </tr>\n                <tr>\n                    <td tabindex=\"0\">18</td>\n                    <td tabindex=\"0\">19</td>\n                    <td tabindex=\"0\">20</td>\n                    <td tabindex=\"0\">21</td>\n                    <td tabindex=\"0\">22</td>\n                    <td tabindex=\"0\">23</td>\n                    <td tabindex=\"0\">24</td>\n                </tr>\n                <tr>\n                    <td tabindex=\"0\">25</td>\n                    <td tabindex=\"0\">26</td>\n                    <td tabindex=\"0\">27</td>\n                    <td tabindex=\"0\">28</td>\n                    <td tabindex=\"0\">29</td>\n                    <td tabindex=\"0\">30</td>\n                    <td tabindex=\"0\" class=\"ias-soften\">1</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n    <h3>Opened Month Picker</h3>\n    <div toggle-repeat-code=\"inner\">\n        <button class=\"ias-button ias-icon-button\" type=\"button\">\n            <i class=\"ias-icon ias-icon-date_thick\"></i>\n        </button>\n        <div class=\"ias-datepicker\">\n            <div class=\"ias-actions\">\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-prev_left_thin\"></i>\n                </button>\n                <span tabindex=\"0\">2017</span>\n                <button class=\"ias-button ias-icon-button\" type=\"button\">\n                    <i class=\"ias-icon ias-icon-next_right_thin\"></i>\n                </button>\n            </div>\n            <table class=\"ias-break\">\n                <tbody>\n                <tr>\n                    <td tabindex=\"0\">Jan</td>\n                    <td tabindex=\"0\">Feb</td>\n                    <td tabindex=\"0\">Mar</td>\n                    <td tabindex=\"0\">Apr</td>\n                </tr>\n                <tr>\n                    <td tabindex=\"0\">May</td>\n                    <td tabindex=\"0\">Jun</td>\n                    <td tabindex=\"0\">Jul</td>\n                    <td tabindex=\"0\">Aug</td>\n                </tr>\n                <tr>\n                    <td tabindex=\"0\">Sep</td>\n                    <td tabindex=\"0\">Oct</td>\n                    <td tabindex=\"0\">Nov</td>\n                    <td tabindex=\"0\">Dec</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</section>\n\n<h2>Appearance</h2>\n\n<h3>Datepicker Specifics</h3>\n    <h5>Implementation</h5>\n    <ul>\n        <li>Datepickers are displayed in a familiar calendar layout with interactive dates and changeable months.</li>\n        <li>Hovering over calendar elements will highlight those elements to communicate interactivity to the user.</li>\n        <li>Dates outside of the range of the current month should be greyed-out with the class .ias-soften.</li>\n        <li>A month picker can be opened by clicking the month and year in the title of a datepicker.</li>\n        <li>A month picker allows for the user to choose a month in a given year, and change the year with arrow icons.</li>\n        <li>Clicking a month within a month picker steps back to that month and year in the datepicker.</li>\n    </ul>\n\n    <h5>Common Patterns</h5>\n    <ul>\n        <li>If it is necessary to choose a distant date, consider using a input field with a format hint instead.</li>\n    </ul>\n\n<h3>Nesting</h3>\n    <h5>Nestable Components</h5>\n    <ul>\n        <li>Icon Button .ias-icon-button</li>\n        <li>Spans &lt;span&gt;</li>\n        <li>Tables</li>\n        <li>Text Icon Button .ias-icon-text-button</li>\n    </ul>\n\n    <h5>Nesting Datepickers in Other Components</h5>\n    <p class=\"ias-page-instructions\">\n        Date pickers are a special form of an input field and can be nested wherever you would find an input field. Date\n        pickers will overlay content when opened.\n    </p>\n\n<h3>Responsive Displays</h3>\n<p class=\"ias-page-instructions\">\n    Date pickers are not responsive to changing screen width. If a screens width is less than the width of the calendar\n    the calendar will be cut off.\n</p>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var DualColumnComponent = (function () {
	    function DualColumnComponent() {
	    }
	    return DualColumnComponent;
	}());
	DualColumnComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(60)
	    })
	], DualColumnComponent);
	exports.default = DualColumnComponent;


/***/ },
/* 60 */
/***/ function(module, exports) {

	var path = 'components/docs/dual-column/dual-column.component.html';
	var html = "<h2 class=\"ias-page-title\">Dual Column</h2>\n\n<p class=\"ias-page-instructions\">\n    Dual column selection allows the user to choose among several items and order them as he or she prefers via\n    drag and drop. Clicking the checkmark and close icons on an item selects and de-selects the item. Dragging\n    a selected item upward or downward rearranges its order in the selected item list.\n</p>\n\n<section>\n    <h3>General Use</h3>\n\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-bucket ias-target\">\n            <h3>Selected Columns</h3>\n            <ul>\n                <li class=\"ias-locked\">Request</li>\n                <li>Task\n                    <button class=\"ias-button ias-icon-button\" type=\"button\">\n                        <i class=\"ias-icon ias-icon-close_thin\"></i>\n                    </button>\n                </li>\n                <li>Assigned to\n                    <button class=\"ias-button ias-icon-button\" type=\"button\">\n                        <i class=\"ias-icon ias-icon-close_thin\"></i>\n                    </button>\n                </li>\n                <li>Recipient\n                    <button class=\"ias-button ias-icon-button\" type=\"button\">\n                        <i class=\"ias-icon ias-icon-close_thin\"></i>\n                    </button>\n                </li>\n                <li>Due date\n                    <button class=\"ias-button ias-icon-button\" type=\"button\">\n                        <i class=\"ias-icon ias-icon-close_thin\"></i>\n                    </button>\n                </li>\n                <li>Claimed\n                    <button class=\"ias-button ias-icon-button\" type=\"button\">\n                        <i class=\"ias-icon ias-icon-close_thin\"></i>\n                    </button>\n                </li>\n                <li>Request Date\n                    <button class=\"ias-button ias-icon-button\" type=\"button\">\n                        <i class=\"ias-icon ias-icon-close_thin\"></i>\n                    </button>\n                </li>\n            </ul>\n        </div>\n        <div class=\"ias-bucket\">\n            <h3>Available Columns</h3>\n            <ul>\n                <li>Type\n                    <button class=\"ias-button ias-icon-button\" type=\"button\">\n                        <i class=\"ias-icon ias-icon-back_left_thick\"></i>\n                    </button>\n                </li>\n                <li>Priority\n                    <button class=\"ias-button ias-icon-button\" type=\"button\">\n                        <i class=\"ias-icon ias-icon-back_left_thick\"></i>\n                    </button>\n                </li>\n            </ul>\n        </div>\n    </div>\n</section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var CommentComponent = (function () {
	    function CommentComponent() {
	    }
	    return CommentComponent;
	}());
	CommentComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(62)
	    })
	], CommentComponent);
	exports.default = CommentComponent;


/***/ },
/* 62 */
/***/ function(module, exports) {

	var path = 'components/docs/comment/comment.component.html';
	var html = "<h1 class=\"ias-page-title\">Comment</h1>\n\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n    Comments allow for communication to take place within a product. This communication can be between users, technical\n    support staff, and the system itself. Comments should have the defining elements of an avatar image, user name,\n    timestamp, available actions, and the message itself.\n</p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n    A component that allows for communication between users as well as the product.\n</p>\n\n<h2>Examples</h2>\n\n<section>\n    <h3>Comment with Icon Actions</h3>\n\n    <div class=\"ias-comment\" toggle-repeat-code>\n\n        <div class=\"ias-avatar\" style=\"background-image:url(images/appmarks/mark_02.png)\"></div>\n        <div class=\"ias-comment-content\">\n            <div>\n                <span class=\"ias-author\">Jonathan Smithsonian</span>\n                <span class=\"ias-date\">10:38 AM MDT</span>\n                <button class=\"ias-button ias-icon-button\" type=\"button\" title=\"Reply\">\n                    <i class=\"ias-icon ias-icon-comment_thick\"></i>\n                </button>\n                <button class=\"ias-button ias-icon-button\" type=\"button\" title=\"Edit\">\n                    <i class=\"ias-icon ias-icon-edit_thick\"></i>\n                </button>\n                <button class=\"ias-button ias-icon-button\" type=\"button\" title=\"Delete\">\n                    <i class=\"ias-icon ias-icon-delete_thin\"></i>\n                </button>\n            </div>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo sapien et erat auctor mollis.</p>\n        </div>\n    </div>\n    <h5>Specifics</h5>\n</section>\n\n<section>\n    <h3>Comment with Menu Actions</h3>\n\n    <h5>Comment with Menu Activated</h5>\n    <div class=\"section-with-menus\" toggle-repeat-code=\"inner\">\n        <div class=\"ias-comment\">\n            <i class=\"ias-icon ias-icon-comment_sys_thin\"></i>\n            <div class=\"ias-comment-content\">\n                <div>\n                    <span class=\"ias-author\">System</span>\n                    <span class=\"ias-date\">10:45 AM MDT</span>\n                    <button class=\"ias-button ias-icon-button ias-selected\" type=\"button\" title=\"Show Menu\">\n                        <i class=\"ias-icon ias-icon-circle_horz_menu_fill\"></i>\n                    </button>\n                    <div class=\"ias-menu ias-open\">\n                        <div class=\"ias-menu-content\">\n                            <button type=\"button\" class=\"ias-button\">Reply</button>\n                            <button type=\"button\" class=\"ias-button\">Edit</button>\n                            <button type=\"button\" class=\"ias-button\">Delete</button>\n                        </div>\n                    </div>\n                </div>\n                <p>System has been restored.</p>\n            </div>\n        </div>\n    </div>\n\n\n    <h5>Comment with Inactive Menu</h5>\n        <div class=\"ias-comment\" toggle-repeat-code>\n            <i class=\"ias-icon ias-icon-comment_sys_thin\"></i>\n            <div class=\"ias-comment-content\">\n                <div>\n                    <span class=\"ias-author\">System</span>\n                    <span class=\"ias-date\">10:45 AM MDT</span>\n                    <button class=\"ias-button ias-icon-button\" type=\"button\" title=\"Show Menu\">\n                        <i class=\"ias-icon ias-icon-circle_horz_menu_fill\"></i>\n                    </button>\n                </div>\n                <p>System has been restored.</p>\n            </div>\n        </div>\n</section>\n\n<section>\n    <h3>Comment Thread</h3>\n\n    <div class=\"ias-comment-thread\" toggle-repeat-code>\n        <div class=\"ias-header\">\n            <span>comment_thread</span>\n            <span>(3) Comments</span>\n        </div>\n        <div class=\"ias-body\">\n            <div class=\"ias-date\">June 20th, 2017</div>\n            <div class=\"ias-comment\">\n                <i class=\"ias-icon ias-icon-comment_user_thin\"></i>\n                <div class=\"ias-comment-content\">\n                    <div>\n                        <span class=\"ias-author\">Support Technician</span>\n                        <span class=\"ias-date\">4:03 PM MDT</span>\n                    </div>\n                    <p>Pellentesque aliquet vulputate justo, vitae porta.</p>\n                </div>\n                <button class=\"ias-button ias-icon-button\" type=\"button\" title=\"Show Menu\">\n                    <i class=\"ias-icon ias-icon-circle_horz_menu_fill\"></i>\n                </button>\n            </div>\n            <div class=\"ias-comment\">\n                <div class=\"ias-avatar\" style=\"background-image:url(images/appmarks/mark_02.png)\"></div>\n                <div class=\"ias-comment-content\">\n                    <div>\n                        <span class=\"ias-author\">System</span>\n                        <span class=\"ias-date\">4:17 PM MDT</span>\n                    </div>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n                       laboris nisi ut aliquip ex ea commodo consequat.</p>\n                </div>\n                <button class=\"ias-button ias-icon-button\" type=\"button\" title=\"Show Menu\">\n                    <i class=\"ias-icon ias-icon-circle_horz_menu_fill\"></i>\n                </button>\n            </div>\n            <div class=\"ias-date\">June 21st, 2017</div>\n            <div class=\"ias-comment\">\n                <i class=\"ias-icon ias-icon-comment_user_thin\"></i>\n                <div class=\"ias-comment-content\">\n                    <div>\n                        <span class=\"ias-author\">Support Technician</span>\n                        <span class=\"ias-date\">11:21 AM MDT</span>\n                    </div>\n                    <p>Phasellus lobortis lorem sit amet dui dapibus, vel laoreet lorem maximus.\n                       Nullam a pharetra arcu.</p>\n                </div>\n                <button class=\"ias-button ias-icon-button\" type=\"button\" title=\"Show Menu\">\n                    <i class=\"ias-icon ias-icon-circle_horz_menu_fill\"></i>\n                </button>\n            </div>\n        </div>\n        <div class=\"ias-footer\">\n            <div class=\"ias-comment\">\n                <div class=\"ias-avatar\" style=\"background-image:url(images/appmarks/mark_02.png)\"></div>\n                <textarea class=\"ias-comment-content\"></textarea>\n            </div>\n            <div class=\"ias-actions\">\n                <button class=\"ias-button\">Send</button>\n            </div>\n        </div>\n    </div>\n</section>\n\n<h2>Appearance</h2>\n\n<h3>Comment Specifics</h3>\n    <h5>Implementation</h5>\n    <ul>\n        <li>Each comment has an avatar image, user name, timestamp, available actions and the message itself.</li>\n        <li>Always depict an author and a timestamp left-aligned at the top of the comment area.</li>\n        <li>Action and menu icons give options to the user, when not in a defined area place these next to the title.</li>\n        <li>A menu icon button should be used when more than three action icons exist.</li>\n        <li>Open menus will overlay other content when active.</li>\n        <li>A thread of comments represent a defined area, and can have the menu buttons aligned on the right.</li>\n    </ul>\n\n<h3>Nestable Components</h3>\n<ul>\n    <li>Buttons .ias-button</li>\n    <li>Icons .ias-icons</li>\n    <li>Icon Buttons .ias-icon-button</li>\n    <li>Images .img (using .ias-avatar)</li>\n    <li>Text Entry textarea with .ias-comment-content</li>\n</ul>\n\n<h3>Responsive Displays</h3>\n<p class=\"ias-page-instructions\">\n    Comments will adapt to the size of the screen in which they are in.  When that screen size is decreased a comment\n    will become decrease as well, wrapping text as needed.  Comments will define margins on the sides to give them space\n    from the edge of the screen.\n</p>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var StatusMessagesComponent = (function () {
	    function StatusMessagesComponent() {
	    }
	    return StatusMessagesComponent;
	}());
	StatusMessagesComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(64)
	    })
	], StatusMessagesComponent);
	exports.default = StatusMessagesComponent;


/***/ },
/* 64 */
/***/ function(module, exports) {

	var path = 'components/docs/status-messages/status-messages.component.html';
	var html = "<h1 class=\"ias-page-title\">Status Messages</h1>\n<h2>General</h2>\n    <p class=\"ias-page-instructions\">\n        Status messages allow an application to notify users. These notifications are delivered through general messages\n        with descriptions, specific status messages with icons or inline messages using only an icon and descriptive\n        title. Specific status messages notify users of errors, warnings, or indicate when a status is okay.\n    </p>\n\n<h2>Purpose</h2>\n    <p class=\"ias-page-instructions\">\n        Notify users using general messages or a status update.\n    </p>\n\n<h2>Examples</h2>\n<section>\n    <h3>Default</h3>\n    <div class=\"ias-status-message\" toggle-repeat-code>\n        <div class=\"ias-status-message-title\">General Status Message</div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n            magna aliqua.\n        </p>\n    </div>\n</section>\n\n<section>\n    <h3>With .ias-icon</h3>\n    <div class=\"ias-status-message\" toggle-repeat-code>\n        <div class=\"ias-status-message-title\">\n            <i class=\"ias-icon ias-icon-message_error_thick ias-error\"></i>\n            <span>General Status with Icon</span>\n        </div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n            magna aliqua.\n        </p>\n    </div>\n</section>\n\n<section>\n    <h3>With a Close .ias-icon-button</h3>\n    <div class=\"ias-status-message\" toggle-repeat-code>\n        <div class=\"ias-status-message-title\">\n            <i class=\"ias-icon ias-icon-status_ok_thick ias-ok\"></i>\n            <span>General Status with Icon</span>\n            <span class=\"ias-fill\"></span>\n            <button class=\"ias-button ias-icon-button ias-status-cancel-button\" title=\"Close\">\n                <i class=\"ias-icon ias-icon-close_thick\"></i>\n            </button>\n        </div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n            magna aliqua.\n        </p>\n    </div>\n</section>\n\n<section>\n    <h3>.ias-icon Inline Status Message</h3>\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-status-message-title\">\n            <i class=\"ias-icon ias-icon-message_error_thick ias-error\"></i>\n            <span>App connector needs more information.</span>\n        </div>\n    </div>\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-status-message-title\">\n            <i class=\"ias-icon ias-icon-status_ok_thick ias-ok\"></i>\n            <span>Connector information submitted successfully.</span>\n        </div>\n    </div>\n</section>\n\n<h3>Common Icons used in Status Messages</h3>\n<section>\n    <h5>.ias-icon .ias-error</h5>\n    <div class=\"ias-status-message\" toggle-repeat-code>\n        <div class=\"ias-status-message-title\">\n            <i class=\"ias-icon ias-icon-status_error_thick ias-error\"></i>\n            <span>Error Status Message</span>\n        </div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n            magna aliqua.\n        </p>\n    </div>\n</section>\n\n<section>\n    <h5>.ias-icon .ias-warn</h5>\n    <div class=\"ias-status-message\" toggle-repeat-code>\n        <div class=\"ias-status-message-title\">\n            <i class=\"ias-icon ias-icon-status_warn_thick ias-warn\"></i>\n            <span>Warning Status Message</span>\n        </div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n            magna aliqua.\n        </p>\n    </div>\n</section>\n\n<section>\n    <h5>.ias-icon .ias-ok</h5>\n    <div class=\"ias-status-message\" toggle-repeat-code>\n        <div class=\"ias-status-message-title\">\n            <i class=\"ias-icon ias-icon-status_ok_thick ias-ok\"></i>\n            <span>OK Status Message</span>\n        </div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n            magna aliqua.\n        </p>\n    </div>\n</section>\n\n<section>\n    <h5>.ias-icon .ias-info</h5>\n    <div class=\"ias-status-message\" toggle-repeat-code>\n        <div class=\"ias-status-message-title\">\n            <i class=\"ias-icon ias-icon-status_info_thick ias-info\"></i>\n            <span>Information Status Message</span>\n        </div>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n            magna aliqua.\n        </p>\n    </div>\n</section>\n\n<h2>Appearance</h2>\n<h3>Status Message Specifics</h3>\n    <h5>Implementation</h5>\n    <ul>\n        <li>Place inline status messages near the elements they are concerned with to create a visual pairing.</li>\n        <li>Inline status messages use icons to clarify they are a status message and not a heading.</li>\n        <li>Status messages requiring a description will use the panel format.</li>\n    </ul>\n\n    <h5>Common Patterns</h5>\n    <ul>\n        <li>Status messages appear throughout applications and are used to notify users concerning the application.</li>\n        <li>Short messages can make use of the inline status format.</li>\n        <li>Status messages with a description will typically have an icon, header, and message.</li>\n        <li>A close button can be added to a panel format message that requires the user to acknowledge the message\n            before excusing it.</li>\n    </ul>\n\n<h3>Nesting</h3>\n    <h5>Nestable Components</h5>\n        <ul>\n            <li>Icons .ias-icon</li>\n            <li>Icon Buttons .ias-icon-button</li>\n            <li>Paragraphs &lt;p&gt;</li>\n            <li>Spans &lt;span&gt;</li>\n        </ul>\n    <h5>Nesting Status Message in Other Components</h5>\n        <p class=\"ias-page-instructions\">\n            Status messages are a prominent component used throughout applications to notify users. If it is\n            useful to have a status message, whether it's a general or an inline status message, they can be nested and\n            placed where they are needed.\n        </p>\n\n<h3>Responsive Displays</h3>\n    <p class=\"ias-page-instructions\">\n        General status messages with a panel background are responsive to the display they appear in. As the width of\n        the display becomes smaller, the panel and message will adjust to the new width.\n    </p>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var component_decorator_1 = __webpack_require__(5);
	var HeaderComponent = (function () {
	    function HeaderComponent() {
	    }
	    return HeaderComponent;
	}());
	HeaderComponent = __decorate([
	    component_decorator_1.Component({
	        templateUrl: __webpack_require__(66)
	    })
	], HeaderComponent);
	exports.default = HeaderComponent;


/***/ },
/* 66 */
/***/ function(module, exports) {

	var path = 'components/docs/header/header.component.html';
	var html = "<h1 class=\"ias-page-title\">Headers</h1>\n<h2>General</h2>\n<p class=\"ias-page-instructions\">\n    Headers are a simple means of adding organization to a page. By using varying sizes and weights of text through\n    header elements, developers can create visually recognizable sections. These sections start with the\n    heaviest visual element (header) followed by smaller sized content.\n    </p>\n\n<h2>Purpose</h2>\n<p class=\"ias-page-instructions\">\n    Headers are a textual method of organizing content on a page.\n</p>\n\n<h2>Examples</h2>\n\n<section>\n    <h4>Header Levels (h2-h5)</h4>\n    <div toggle-repeat-code=\"inner\">\n        <h2>Page Heading 2</h2>\n        <h3>Page Heading 3</h3>\n        <h4>Page Heading 4</h4>\n        <h5>Page Heading 5</h5>\n    </div>\n</section>\n\n<section>\n    <h4>.ias-header</h4>\n\n    <div class=\"ias-header\" toggle-repeat-code>\n        <h2>Header Title</h2>\n    </div>\n</section>\n\n<section>\n    <h4>.ias-header with Subtitle and Content</h4>\n    <div toggle-repeat-code=\"inner\">\n        <div class=\"ias-header\">\n            <h2>Header Title</h2>\n            <h5>Sub Title</h5>\n        </div>\n        <div>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda error ipsum neque odio quis\n                reprehenderit sequi. Accusantium atque, delectus earum, eius fugiat id iure nostrum obcaecati, quisquam\n                quod sed vero.\n            </p>\n        </div>\n    </div>\n</section>\n\n<section>\n    <h4>With .ias-icon-button</h4>\n\n    <div class=\"ias-header\" toggle-repeat-code>\n        <h2>Header Title</h2>\n        <button class=\"ias-button ias-icon-button\">\n            <i class=\"ias-icon ias-icon-configure_thick\"></i>\n        </button>\n    </div>\n</section>\n\n<section>\n    <h4>With .ias-fill</h4>\n\n    <div class=\"ias-header\" toggle-repeat-code>\n        <h2>Header Title</h2>\n        <h5>Sub Title</h5>\n        <button class=\"ias-button ias-icon-button\">\n            <i class=\"ias-icon ias-icon-new_thick\"></i>\n        </button>\n        <button class=\"ias-button ias-icon-button\">\n            <i class=\"ias-icon ias-icon-configure_thick\"></i>\n        </button>\n        <span class=\"ias-fill\"></span>\n        <button class=\"ias-button ias-icon-button\">\n            <i class=\"ias-icon ias-icon-close_thick\"></i>\n        </button>\n    </div>\n</section>\n\n<section>\n    <h4>With .ias-search</h4>\n\n    <div class=\"ias-header\" toggle-repeat-code>\n        <h2>Header Title</h2>\n        <h5>Sub Title</h5>\n        <div class=\"ias-input-container ias-search\">\n            <input type=\"text\" autocomplete=\"false\" placeholder=\"Search\">\n            <i class=\"ias-icon ias-icon-search_thick\"></i>\n            <button class=\"ias-button ias-icon-button\">\n                <i class=\"ias-icon ias-icon-close_thick\"></i>\n            </button>\n        </div>\n        <button class=\"ias-button ias-icon-button\" type=\"button\">\n            <i class=\"ias-icon ias-icon-new_thick\"></i>\n        </button>\n        <button class=\"ias-button ias-icon-button\" type=\"button\">\n            <i class=\"ias-icon ias-icon-configure_thick\"></i>\n        </button>\n        <span class=\"ias-fill\"></span>\n        <button class=\"ias-button ias-icon-button\">\n            <i class=\"ias-icon ias-icon-close_thick\"></i>\n        </button>\n    </div>\n</section>\n\n<h2>Appearance</h2>\n<h3>Header Specifics</h3>\n    <h5>Implementation</h5>\n    <ul>\n        <li>&lt;h2&gt; elements are the main headings used on page content.</li>\n        <li>When creating sub-headings for content, use headings smaller than the section heading.</li>\n        <li>Limit the use of the &lt;h1&gt; element to special instances, as it draws too much attention from content.</li>\n    </ul>\n\n    <h5>Common Patterns</h5>\n    <ul>\n        <li>Use header elements to create different sections of a page.</li>\n        <li>Try to limit the use of headings to three different sizes per page.</li>\n        <li>Headings are primarily used by readers as a scanning tool to navigate to desired page content.</li>\n    </ul>\n\n<h3>Nesting</h3>\n<h5>Nesting Headers in other Elements</h5>\n<p class=\"ias-page-instructions\">\n    Headers are primarily used within elements such as pages, panels, and dialogs; but, they can be nested in many\n    different places.  Headers may also be nested as subsections of other headers to reflect the organization of\n    the content.\n</p>\n<h5>Nestable components</h5>\n<ul>\n    <li>Buttons .ias-button</li>\n    <li>Icon Buttons .ias-button-icon</li>\n    <li>Search Boxes .ias-input-container .ias-search</li>\n</ul>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ }
/******/ ]);