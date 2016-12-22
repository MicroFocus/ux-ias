angular.module('app').controller('AppController', AppController);

function AppController($document, $state, $stateParams, config) {
    this.projectName = config.projectName;
    this.$document = $document;
    this.$state = $state;
    this.$stateParams = $stateParams;
}

AppController.prototype.$onInit = function() {
    this.themeLink = this.$document[0].getElementById('theme-link');

    this.setDisplayDirection(this.$stateParams.dir);
    this.setTheme(this.$stateParams.theme);
};

// This click handler overrides the ui-sref directive so that ui-sref-active
// functions correctly for all children of the abstract state 'app.component'
AppController.prototype.goToComponentsView = function($event) {
    $event.preventDefault();

    this.$state.go('app.component.appBar');
};

AppController.prototype.setDisplayDirection = function(direction) {
    this.displayDirection = direction || 'ltr';

    this.$document[0].body.dir = this.displayDirection;
};

AppController.prototype.setTheme = function(theme) {
    if (theme) {
        this.theme = 'mfux' + '_' + theme;
    }
    else {
        this.theme = 'mfux';
    }

    this.themeLink.href = this.themeLink.href.replace(/(\/)([^\/]+)(\.css$)/, '$1' + this.theme + '$3');
};

AppController.prototype.toggleDisplayDirection = function() {
    this.displayDirection = this.displayDirection === 'ltr' ? 'rtl' : 'ltr';

    this.$state.go('.', { dir: this.displayDirection });
};

AppController.prototype.toggleTheme = function() {
    if (this.isDefaultTheme()) {
        this.$state.go('.', { theme: 'dark' });
    }
    else {
        this.$state.go('.', { theme: undefined });
    }
};

AppController.prototype.isDefaultTheme = function() {
    return this.theme === 'mfux';
};
