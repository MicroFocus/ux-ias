import {module, bootstrap, ILocationProvider} from 'angular';
// Config
import config from './config/config';
import routes from './config/routes';
// Layout Components
import ApplicationComponent from './components/application/application.component';
import ComponentsComponent from './components/components/components.component';
import KitchenSinkComponent from './components/kitchen-sink/kitchen-sink.component';
import ProjectComponent from './components/project/project.component';
// Docs Components
import AccordionControlComponent from './components/docs/accordion-control/accordion-control';
import AppBarComponent from './components/docs/app-bar/app-bar.component';
import ButtonComponent from './components/docs/button/button.component';
import ColorsComponent from './components/docs/colors/colors.component';
import DemoContentComponent from './components/components/demo-content.component';
import DialogComponent from './components/docs/dialog/dialog.component';
import FormFieldComponent from './components/docs/form-field/form-field.component';
import FormValidationComponent from './components/docs/form-validation/form-validation.component';
import IconComponent from './components/docs/icon/icon.component';
import IconButtonComponent from './components/docs/icon-button/icon-button.component';
import IconButtonTextComponent from './components/docs/icon-button-text/icon-button-text.component';
import LinkComponent from './components/docs/link/link.component';
import ListComponent from './components/docs/list/list.component';
import MenuComponent from './components/docs/menu/menu.component';
import NavComponent from './components/docs/nav/nav.component';
import PanelComponent from './components/docs/panel/panel.component';
import SearchComponent from './components/docs/search/search.component';
import SideNavComponent from './components/docs/side-nav/side-nav.component';
import SideNavUIComponent from './components/components/side-nav/side-nav.component';
import TabComponent from './components/docs/tab/tab.component';
import TableComponent from './components/docs/table/table.component';
import TileComponent from './components/docs/tile/tile.component';
import TileGridComponent from './components/docs/tile-grid/tile-grid.component';
import {ToggleDirective} from './components/components/toggle/toggle.directive';
import ToggleService from './components/components/toggle/toggle.service';
import MultiValuedInputComponent from './components/docs/multi-valued-input/multi-valued-input.component';
import TagsComponent from './components/docs/tags/tags.component';
import DatepickerComponent from './components/docs/datepicker/datepicker.component';
import PageComponent from './components/docs/page/page.component';
import DualColumnComponent from './components/docs/dual-column/dual-column.component';
import CommentComponent from './components/docs/comment/comment.component';
import StatusMessagesComponent from './components/docs/status-messages/status-messages.component';
import IconButtonToggleComponent from './components/docs/icon-button-toggle/icon-button-toggle.component';
import HeaderComponent from "./components/docs/header/header.component";


module('app', [
    'ng-prism',
    'ui.router'
])
    .config(routes)
    .constant('config', config)
    // Layout Components
    .component('application', ApplicationComponent)
    .component('components', ComponentsComponent)
    .component('kitchenSink', KitchenSinkComponent)
    .component('project', ProjectComponent)
    // Docs Components
    .component ('accordionControlDocumentation', AccordionControlComponent)
    .component('appBarDocumentation', AppBarComponent)
    .component('buttonDocumentation', ButtonComponent)
    .component('colorsDocumentation', ColorsComponent)
    .component('commentDocumentation', CommentComponent)
    .component('datepickerDocumentation', DatepickerComponent)
    .component('demoContent', DemoContentComponent)
    .component('dialogDocumentation', DialogComponent)
    .component('dualColumnDocumentation', DualColumnComponent)
    .component('formFieldDocumentation', FormFieldComponent)
    .component('formValidationDocumentation', FormValidationComponent)
    .component('headerDocumentation', HeaderComponent)
    .component('iasSideNav', SideNavUIComponent)
    .component('iconDocumentation', IconComponent)
    .component('iconButtonDocumentation', IconButtonComponent)
    .component('iconButtonTextDocumentation', IconButtonTextComponent)
    .component('iconButtonToggleDocumentation', IconButtonToggleComponent)
    .component('linkDocumentation', LinkComponent)
    .component('listDocumentation', ListComponent)
    .component('menuDocumentation', MenuComponent)
    .component('multiValuedInputDocumentation', MultiValuedInputComponent)
    .component('navDocumentation', NavComponent)
    .component('pageDocumentation', PageComponent)
    .component('panelDocumentation', PanelComponent)
    .component('searchDocumentation', SearchComponent)
    .component('sideNavDocumentation', SideNavComponent)
    .component('statusMessagesDocumentation', StatusMessagesComponent)
    .component('tabDocumentation', TabComponent)
    .component('tagsDocumentation', TagsComponent)
    .component('tableDocumentation', TableComponent)
    .component('tileDocumentation', TileComponent)
    .component('tileGridDocumentation', TileGridComponent)

    .directive('iasToggle', ToggleDirective)

    .config(['$locationProvider',
        ($locationProvider: ILocationProvider) => {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }
    ])

    .service('IasToggleService', ToggleService)

    .run(['$transitions', 'IasToggleService',
        ($transitions: {onStart: (Object, Function) => void},   // No definition in @types/angular-ui-router#v1.1.36
         toggleService: ToggleService) => {
            $transitions.onStart({
                to: 'app.component.**',
                from: 'app.component.**'
            }, function() {
                toggleService.hideComponent('componentSideNav');
                document.getElementsByClassName('components-body')[0].scrollTop = 0;
            });
        }
    ]);

bootstrap(document, [ 'app' ]);
