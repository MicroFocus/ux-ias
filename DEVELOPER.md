# Setting up the Development Environment

The development environment has two parts. One part handles building `ux-ias.css` and another builds and 
serves the documentation application.

1. Clone the repository and install packages via NPM

       git clone git@github.com:jedwardhawkins/ux-ias.git
       cd ux-ias
       npm install -g gulp-cli
       npm install

2. In one terminal window:

       ~/ux-ias# gulp
       
   This will build ux-ias and watch files under src/ for changes.
   
3. In a new terminal:

       ~/ux-ias# cd docs
       ~/ux-ias/docs# gulp

   This will build the documentation application, start a local server, and watch files under docs/src for changes.

4. Navigate to localhost:8080 to view the documentation application.

## ng-gulp

This project uses [Gulp](https://gulpjs.com/) and 
[ng-gulp](https://github.com/jedwardhawkins/ng-gulp) to build the project, watch the source for changes, and start
a local server which hosts the application.

### Useful ng-gulp commands

- `gulp build:production` Build project without watching for changes or starting server
- `gulp serve:production` Start local server
- `gulp clean` Remove build output directory
