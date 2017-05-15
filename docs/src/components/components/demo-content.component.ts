import { Component } from '../../component.decorator';

@Component({
    templateUrl: require('./demo-content.component.html'),
    transclude: true
})
export default class DemoContentComponent {
}
