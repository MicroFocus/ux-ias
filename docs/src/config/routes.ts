routes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

function routes(
    $stateProvider: angular.ui.IStateProvider,
    $urlRouterProvider: angular.ui.IUrlRouterProvider
) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', { url: '/?dir&theme', abstract: true, component: 'application' })
        .state('app.project', { url: '', component: 'project' })
        .state('app.kitchenSink', { url: 'kitchen-sink', component: 'kitchenSink' })

        .state('app.component', { url: 'component/', abstract: true, component: 'components' })
        .state('app.component.accordionControl', {
            url: 'accordion-control',
            component: 'accordionControlDocumentation'})
        .state('app.component.appBar', { url: 'app-bar', component: 'appBarDocumentation' })
        .state('app.component.button', { url: 'button', component: 'buttonDocumentation' })
        .state('app.component.colors', { url: 'colors', component: 'colorsDocumentation' })
        .state('app.component.comment', { url: 'comment', component: 'commentDocumentation'})
        .state('app.component.datepicker', {url: 'datepicker', component: 'datepickerDocumentation'})
        .state('app.component.dualColumn', {url: 'dual-column', component: 'dualColumnDocumentation'})
        .state('app.component.dialog', { url: 'dialog', component: 'dialogDocumentation' })
        .state('app.component.formField', { url: 'form-field', component: 'formFieldDocumentation' })
        .state('app.component.formValidation', { url: 'form-validation', component: 'formValidationDocumentation' })
        .state('app.component.icon', { url: 'icon', component: 'iconDocumentation' })
        .state('app.component.iconButton', { url: 'icon-button', component: 'iconButtonDocumentation' })
        .state('app.component.iconButtonText', { url: 'icon-button-text', component: 'iconButtonTextDocumentation' })
        .state('app.component.iconButtonToggle', {
            url: 'icon-button-toggle',
            component: 'iconButtonToggleDocumentation'})
        .state('app.component.link', { url: 'link', component: 'linkDocumentation' })
        .state('app.component.list', { url: 'list', component: 'listDocumentation' })
        .state('app.component.menu', { url: 'menu', component: 'menuDocumentation' })
        .state('app.component.multiValuedInput', {
            url: 'multi-valued-input',
            component: 'multiValuedInputDocumentation'})
        .state('app.component.nav', { url: 'nav', component: 'navDocumentation' })
        .state ('app.component.page', {url: 'page', component: 'pageDocumentation'})
        .state('app.component.panel', { url: 'panel', component: 'panelDocumentation' })
        .state('app.component.search', { url: 'search', component: 'searchDocumentation'})
        .state('app.component.sideNav', { url: 'side-nav', component: 'sideNavDocumentation' })
        .state('app.component.statusMessages', { url: 'status-messages', component: 'statusMessagesDocumentation'})
        .state('app.component.tab', { url: 'tab', component: 'tabDocumentation' })
        .state('app.component.tags', { url: 'tags', component: 'tagsDocumentation'})
        .state('app.component.table', { url: 'table', component: 'tableDocumentation' })
        .state('app.component.tile', { url: 'tile', component: 'tileDocumentation' })
        .state('app.component.tileGrid', { url: 'tile-grid', component: 'tileGridDocumentation' });
}

export default routes;
