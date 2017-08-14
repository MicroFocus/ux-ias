# Contributing to ux-ias

We would love for you to contribute to ux-ias and help to make our project 
more stable and complete! As a contributor, here are the guidelines we would 
like you to follow:

## Bugs and Feature Requests

If you find a bug or would like to request a new feature, open an issue on our GitHub repository.
Before doing so, search through the GitHub issue tracker to make sure there are no identical
issues already on GitHub.

### Bugs

For bugs, please provide an example in which ux-ias fails to perform as expected. This example
should contain only as much code as is necessary to demonstrate the problem. Continue extracting
code out of your example until it is as simple as possible. We will insist on minimal examples
to save maintainers time and ultimately be able to fix more bugs. Interestingly, many users often
find problems in their own code while preparing a simple example.

If you can determine the source of the bug yourself, you can help expedite this process by submitting
a Pull Request with a fix. See the Submission Guidelines section below.

### Feature Requests

You can request a new feature by submitting an issue on GitHub. Through the issue thread we will
discuss and approve the issue before proceeding. After the feature request has been approved
work on the new feature can begin. 

## Submission Guidelines

### Submitting a Pull Request

Create a branch following [GitHub Flow](https://guides.github.com/introduction/flow/) standards. 
Prefix branch names by their type: feature, bugfix, hotfix, release, etc. (i.e. `feature/icon-button`).
As you work, please make sure you follow correct coding practices and Typescript types.
Once you have committed your changes, open a pull request on GitHub to merge your changes
into the `development` branch.

### Coding Rules

- Adhere to tslint rules. Running the build command will alert you if any tslint rules have been
  broken. Be sure to fix broken rules before committing your changes.
- Include Typescript types, except where [inferred](https://www.typescriptlang.org/docs/handbook/type-inference.html).
  Use interfaces to enforce types among objects and classes. Begin interface names with an "I".
- Indentation: Use 2 spaces for `scss` files; 4 spaces for `ts`, `js`, and `html` files.
- Dot notation: Longer statements including the dot operator more than once should be split across
  lines. Begin each new dot on a separate line and align it with the previous line.
- Write attractive code. Alphabetize variables and object properties where possible. 


