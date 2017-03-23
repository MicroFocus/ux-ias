import { module, bootstrap } from 'angular';
// Config
import config from './config/config';
import routes from './config/routes';
// Layout Components
import ApplicationComponent from './components/application/application.component';
import ComponentsComponent from './components/components/components.component';
import KitchenSinkComponent from './components/kitchen-sink/kitchen-sink.component';
import ProjectComponent from './components/project/project.component';
// Docs Components
import AppBarComponent from './components/docs/app-bar/app-bar.component';
import ButtonComponent from './components/docs/button/button.component';
import ColorsComponent from './components/docs/colors/colors.component';
import DialogComponent from './components/docs/dialog/dialog.component';
import FormFieldComponent from './components/docs/form-field/form-field.component';
import IconComponent from './components/docs/icon/icon.component';
import IconButtonComponent from './components/docs/icon-button/icon-button.component';
import IconButtonTextComponent from './components/docs/icon-button-text/icon-button-text.component';
import LinkComponent from './components/docs/link/link.component';
import ListComponent from './components/docs/list/list.component';
import MenuComponent from './components/docs/menu/menu.component';
import NavComponent from './components/docs/nav/nav.component';
import PanelComponent from './components/docs/panel/panel.component';
import SideNavComponent from './components/docs/side-nav/side-nav.component';
import TabComponent from './components/docs/tab/tab.component';
import TableComponent from './components/docs/table/table.component';
import TileComponent from './components/docs/tile/tile.component';
import TileGridComponent from './components/docs/tile-grid/tile-grid.component';


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
    .component('appBarDocumentation', AppBarComponent)
    .component('buttonDocumentation', ButtonComponent)
    .component('colorsDocumentation', ColorsComponent)
    .component('dialogDocumentation', DialogComponent)
    .component('formFieldDocumentation', FormFieldComponent)
    .component('iconDocumentation', IconComponent)
    .component('iconButtonDocumentation', IconButtonComponent)
    .component('iconButtonTextDocumentation', IconButtonTextComponent)
    .component('linkDocumentation', LinkComponent)
    .component('listDocumentation', ListComponent)
    .component('menuDocumentation', MenuComponent)
    .component('navDocumentation', NavComponent)
    .component('panelDocumentation', PanelComponent)
    .component('sideNavDocumentation', SideNavComponent)
    .component('tabDocumentation', TabComponent)
    .component('tableDocumentation', TableComponent)
    .component('tileDocumentation', TileComponent)
    .component('tileGridDocumentation', TileGridComponent);

bootstrap(document, [ 'app' ]);
