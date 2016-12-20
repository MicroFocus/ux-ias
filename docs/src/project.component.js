function ProjectComponent(config) {
    this.projectName = config.projectName;
    this.teamName = config.teamName;
}

angular.module('app').component('projectComponent', {
    controller: ProjectComponent,
    templateUrl: 'src/project.component.html'
});
