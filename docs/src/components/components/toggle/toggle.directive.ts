import { IAttributes, IAugmentedJQuery, IDirective, IScope } from 'angular';
import ToggleService from './toggle.service';

export interface IToggleable {
    name: string;
    open: boolean;

    hide(): void;
    show(element?: IAugmentedJQuery): void;
}

export function ToggleDirective(toggleService: ToggleService): IDirective {
    return {
        link: (scope: IScope, element: IAugmentedJQuery, attrs: IAttributes) => {
            element.on('click', () => { toggleService.toggleComponent(attrs['iasToggle'], element); });
        },
        restrict: 'A'
    };
}

ToggleDirective.$inject = [ 'IasToggleService' ];
