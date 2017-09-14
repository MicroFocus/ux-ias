import { IAugmentedJQuery } from 'angular';
import { IToggleable } from './toggle.directive';

export default class ToggleService {
    private toggleableComponents: any;

    constructor() {
        this.toggleableComponents = {};
    }

    hideComponent(componentId: string): void {
        let toggleableElement: IToggleable = this.toggleableComponents[componentId];

        if (toggleableElement == null) {
            return;
        }

        toggleableElement.hide();
    }

    register(toggleableComponent: IToggleable): void {
        this.toggleableComponents[toggleableComponent.name] = toggleableComponent;
    }

    toggleComponent(componentId: string, element: IAugmentedJQuery): void {
        let toggleableElement: IToggleable = this.toggleableComponents[componentId];

        if (toggleableElement == null) {
            return;
        }

        if (!toggleableElement.open) {
            toggleableElement.show(element);
        }
        else {
            toggleableElement.hide();
        }
    }
}
