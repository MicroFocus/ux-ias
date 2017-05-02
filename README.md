# MicroFocus UX-IAS
MicroFocus Identity and Access Management Group has defined a set of style and user experience (UX) guidelines for browser-based web applications. This guide serves as both a formal specification and reference implentation of these UX guidelines.

## Usage
### Installation
1. `<link href="dist/ux-ias.css" rel="stylesheet">`
 
After the initial setup, copy code/examples from the [docs app](#DocsApp) into your project.
 
### Icons
ias-icons is required. To install ias-icons:
1. `git clone https://JHawkins@secmgmtgit.provo.novell.com:8443/scm/~jhawkins/ias-icons.git`
2. `cd ias-icons/`
3. `npm link`
4. `cd [YOUR_APP_DIRECTORY]`
5. `npm link ias-icons`
6. Add `<link href="node_modules/ias-icons/dist/ias-icons.css" rel="stylesheet">` to index.html

ias-icons requires that ias-icons/dist/fonts be located in the same directory as ias-icons/dist/ias-icons.css

## Development

1. Clone the ux-ias repository. Get the appropriate url from the BitBucket server since it is specific to you. You can find it by clicking on the "Clone" action in the left toolbar of this project. Use that url in the command below: 

`git clone https://YourUsername@secmgmtgit.provo.novell.com:8443/scm/~jhawkins/ux-ias.git`

2. Install the build tools. The ux-ias project uses gulp.js, which can be installed as follows:

`npm install -g gulp-cli`

3. Install the [BitBucket server certificate](https://wiki.provo.microfocus.com:8443/download/attachments/32741329/secmgmtgit.provo.novell.com.pem.txt), if you have not done so already. Download it, then run the command below. More information can be found on the [company wiki](https://wiki.provo.microfocus.com:8443/display/ENG/Bitbucket+Server+-+Getting+Started). 

`git config --global http."https://secmgmtgit.provo.novell.com:8443/".sslCAInfo path/to/cert.pem`

4. Install the project dependencies:

```
cd ux-ias
npm install
```

### Development Environment
To build the code for development, run
1. `gulp build:development`

To start a development environment for the code under src/ run
1. `gulp`

### Docs App
In another terminal 
1. `cd docs/`
2. `gulp`

Navigate to http://localhost:8081 to see the documentation web site

### Production builds
To build the code for production, run
1. `gulp build:production`

### Building the docs app
1. `cd docs/`
2. `gulp build:production`