# MicroFocus UX
MicroFocus Identity and Access Management Group has defined a set of style and user experience (UX) guidelines for browser-based web applications. This guide serves as both a formal specification and reference implentation of these UX guidelines.

## Usage
### Installation
1. `<link href="dist/mfux.css" rel="stylesheet">`
 
After the initial setup, copy code/examples from the [docs app](#DocsApp) into your project.
 
### Icons
mf-icons is required. To install mf-icons:
1. `git clone https://JHawkins@secmgmtgit.provo.novell.com:8443/scm/~jhawkins/mf-icons.git`
2. `cd mf-icons/`
3. `npm link`
4. `cd [YOUR_APP_DIRECTORY]`
5. `npm link mf-icons`
6. Add `<link href="node_modules/mf-icons/dist/mf-icons.css" rel="stylesheet">` to index.html

mf-icons requires that mf-icons/dist/fonts be located in the same directory as mf-icons/dist/mf-icons.css

## Development
1. `npm install -g gulp-cli`
1. `npm install`

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