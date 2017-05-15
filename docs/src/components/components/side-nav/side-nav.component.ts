import { Component } from '../../../component.decorator';
import { IAugmentedJQuery } from 'angular';
import { IToggleable } from '../toggle/toggle.directive';
import ToggleService from '../toggle/toggle.service';

@Component({
    bindings: {
        name: '@'
    },
    templateUrl: require('./side-nav.component.html'),
    transclude: true
})
export default class SideNavUIComponent implements IToggleable {
    name: string;
    open: boolean;

    static $inject = ['$element', 'IasToggleService'];
    constructor(private $element: IAugmentedJQuery, private toggleService: ToggleService) {
        this.open = false;
    }

    $onInit(): void {
        this.toggleService.register(this);
    }

    $onDestroy() {
        this.$element.off('click');
    }

    hide() {
        this.$element.removeClass('ias-open');
        this.open = false;
    }

    show() {
        this.$element.addClass('ias-open');
        this.open = true;
    }
}
