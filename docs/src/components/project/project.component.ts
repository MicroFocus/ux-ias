import { Component } from '../../component.decorator';

@Component({
    templateUrl: require('./project.component.html')
})
export default class ProjectComponent {
    projectName: string;
    teamName: string;

    static $inject = [ 'config' ];
    constructor(config) {
        this.projectName = config.projectName;
        this.teamName = config.teamName;
    }
}
