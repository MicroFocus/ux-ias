angular.module('app')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('app', {
                url: '/?dir&theme',
                abstract: true,
                controller: 'AppController as app',
                templateUrl: '_layout.html'
            })
            .state('app.project', { url: '', component: 'projectComponent' })
            .state('app.kitchenSink', { url: 'kitchen-sink', templateUrl: 'src/kitchen-sink.template.html' })

            .state('app.component', { url: 'component/', abstract: true, templateUrl: 'src/component.template.html' })
            .state('app.component.appBar', { url: 'app-bar', component: 'appBarComponent' })
            .state('app.component.button', { url: 'button', component: 'buttonComponent' })
            .state('app.component.colors', { url: 'colors', component: 'colorsComponent' })
            .state('app.component.dialog', { url: 'dialog', component: 'dialogComponent' })
            .state('app.component.formField', { url: 'form-field', component: 'formFieldComponent' })
            .state('app.component.icon', { url: 'icon', component: 'iconComponent' })
            .state('app.component.iconButton', { url: 'icon-button', component: 'iconButtonComponent' })
            .state('app.component.iconButtonText', { url: 'icon-button-text', component: 'iconButtonTextComponent' })
            .state('app.component.link', { url: 'link', component: 'linkComponent' })
            .state('app.component.list', { url: 'list', component: 'listComponent' })
            .state('app.component.menu', { url: 'menu', component: 'menuComponent' })
            .state('app.component.nav', { url: 'nav', component: 'navComponent' })
            .state('app.component.panel', { url: 'panel', component: 'panelComponent' })
            .state('app.component.sideNav', { url: 'side-nav', component: 'sideNavComponent' })
            .state('app.component.tab', { url: 'tab', component: 'tabComponent' })
            .state('app.component.table', { url: 'table', component: 'tableComponent' })
            .state('app.component.tile', { url: 'tile', component: 'tileComponent' })
            .state('app.component.tileGrid', { url: 'tile-grid', component: 'tileGridComponent' });
    });
