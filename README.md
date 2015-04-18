karma-mocha-chai
================

Skeleton setup for a bare project using karma with mocha and chai.

**Note:** I have only tested this setup on OSX. Windows users will probably need to [configure the PHANTOMJS_BIN](https://github.com/karma-runner/karma-phantomjs-launcher/issues/31#issuecomment-47202373) environment variable.

## Getting started
1. Install global npm dependencies
   * `npm i -g grunt-cli`
2. clone the repository
3. `npm i`
3. `npm test`

After running `npm test` you should see a failing test.

## Changelog
* **04/18/15**
  * Updated to use eslint instead of jshint
  * Updated instructions
* **07/14/14**
  * Updated to use 0.12.x version of karma
  * Added a grunt configuration
