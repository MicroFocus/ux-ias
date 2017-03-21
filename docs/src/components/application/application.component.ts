import { Component } from '../../component.decorator';
import { IDocumentService } from 'angular';

@Component({
    templateUrl: require('./application.component.html')
})
export default class ApplicationComponent {
    displayDirection: string;
    projectName: string;
    theme: string;
    themeLink: HTMLLinkElement;

    static $inject = ['$document', '$state', '$stateParams', 'config'];
    constructor(private $document: IDocumentService,
                private $state: angular.ui.IStateService,
                private $stateParams: angular.ui.IStateParamsService,
                config: any) {
        this.projectName = config.projectName;
    }

    $onInit(): void {
        this.themeLink = <HTMLLinkElement>this.$document[0].querySelector('#theme-link');

        this.setDisplayDirection(this.$stateParams['dir']);
        this.setTheme(this.$stateParams['theme']);
    };

    // This click handler overrides the ui-sref directive so that ui-sref-active
    // functions correctly for all children of the abstract state 'app.component'
    goToComponentsView($event): void {
        $event.preventDefault();

        this.$state.go('app.component.appBar');
    };

    setDisplayDirection(direction): void {
        this.displayDirection = direction || 'ltr';

        this.$document.find('body').attr('dir', this.displayDirection);
    };

    setTheme(theme): void {
        if (theme) {
            this.theme = 'app' + '_' + theme;
        }
        else {
            this.theme = 'app';
        }

        this.themeLink.href = this.themeLink.href.replace(/(\/)([^\/]+)(\.css$)/, '$1' + this.theme + '$3');
    };

    toggleDisplayDirection(): void {
        this.displayDirection = this.displayDirection === 'ltr' ? 'rtl' : 'ltr';

        this.$state.go('.', { dir: this.displayDirection });
    };

    toggleTheme(): void {
        if (this.isDefaultTheme()) {
            this.$state.go('.', { theme: 'dark' });
        }
        else {
            this.$state.go('.', { theme: undefined });
        }
    };

    isDefaultTheme(): boolean {
        return this.theme === 'app';
    };

}
