# Setting up the Development Environment

The development environment has two parts. One part handles building `ux-ias.css` and another builds and 
serves the documentation application.

1. Clone the repository and install packages via NPM

       git clone git@github.com:microfocus/ux-ias.git
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

# Publishing ux-ias

Before publishing, it is best for you to have a fork of ux-ias on your GitHub account. You will also want
to create a Travis-CI account. Add an access token with public_repo scope from your GitHub account to the Travis-CI
environmental variables for your Travis-CI ux-ias build (see https://docs.travis-ci.com/user/deployment/pages/).

1. Build and test changes locally.

2. Increment the version number of ux-ias in the package.json file. You can do this using
   "npm --no-git-tag-version version" if desired. Push the changes to your fork of the repository.

3. Build using Travis-CI on your fork of the repository. If you haven't already, enable the build by turning on the
   slider for your fork of ux-ias on your Travis-CI account. Then builds should start automatically. You can also
   kick off a build manually from Travis-CI. After building, check that the build succeeds and that the GitHub Pages
   documentation site on your fork works. Also check that the changes you made are reflected properly in the
   documentation site. This is the step in which many build errors are caught, so please do these checks on your
   fork of the repository rather than on ux-ias itself!

4. After creating pull requests, push the changes to the development and master branches of the ux-ias repository.
   Again, make sure the Travis-CI build succeeds and that the GitHub Pages documentation site loads properly.

5. Dry run publishing to NPM using `npm publish --access public --dry-run`. **This command only works on NPM version
   6.0.0 or above.** Check that the files listed in the output of this command are the same files you intend to publish.

6. If the changes made are significant, you may wish to test what you are about to publish in another environment.
   Run `npm pack` and then `npm install path/to/tarball.tgz` to install the resulting tarball into another project.
   Test the project to make sure it handles ux-ias properly.

7. After logging in to npm using `npm login` (no arguments), publish to NPM using `npm publish --access public`.
   (If you get the error "404 Not found" you may need to set the package to Read/Write access -
   see https://stackoverflow.com/a/53604667/5016547.)
   Try installing the new version of the package to make sure it was published successfully.

8. Add a new release for ux-ias on the MicroFocus GitHub repository from the Releases page. You do not need to add 
   any archives for the source zip files. These are added automatically.
