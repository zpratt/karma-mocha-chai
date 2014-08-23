Recently, I was on a quest to evaluate the [mocha](http://visionmedia.github.io/mocha/) javascript testing framework
and its direct support for async testing in the browser. I had a hard time finding a complete description of everything that needed to be done in order to get things working with karma for testing in the browser as opposed to testing a node module.

Consequently, I decided it would be useful to create a guide for those who have similar interests to save everyone time. If you want to skip the steps and just download the code, feel free to clone my [github repository](https://github.com/zpratt/karma-mocha-chai). As a quick aside, I decided to try mocha thanks to some frustrations with jasmine. Async testing with jasmine can be done, but it does not have first-class support in my opinion. I intend to give <a href="http://docs.busterjs.org/en/latest/" target="_blank">buster</a> a spin in the near future as well.

This tutorial assumes that you are on a unix-based system (I used OSX to write the article) and already have a working nodejs and npm installation, therefore installing and configuring a node.js/npm environment is outside the scope of this article. With that said, let's dig in!

1. Create a directory to hold the project and navigate to that directory:
  * `mkdir <new_dir>`
  * `cd <new_dir>`
2. We'll be installing a bunch of npm modules, so let's run `npm init` to build our package.json file for us
3. Let's install [karma](http://karma-runner.github.io/) with npm. I recommend installing it locally, since it's likely that you'll be either executing karma from an IDE (such as webstorm) or as a grunt task. Additionally, one project may be configured for one version of karma while a different project can use a different version if needed.
  * `npm install karma --save-dev`
  * At the time I wrote this article, the latest stable version of karma was 0.10.8.
4. Now we're ready to install mocha:
  * `npm install mocha --save-dev`
5. We'll also need the karma-mocha adapter so we can use mocha as a test framework with karma:
  * `npm install karma-mocha --save-dev`
6. An assertion library will need to included as well. I prefer the [chai assertion library](http://chaijs.com/), since it offers both bdd style assertions using expect and should as well as junit-style assertions.
  * `npm install karma-chai --save-dev`.
  * Installing chai this way will make it available as a framework within karma, which makes setup much simpler.
7. I also find [sinon](http://sinonjs.org/) to be extremely useful for stubbing and spying, so let's install it to round out our set of packages required to get our test environment provisioned:
  * `npm install karma-sinon --save-dev`

At this point, our package.json should have a devDependencies directive that looks something like this:

**devDependencies**: <script src="https://gist.github.com/zpratt/c2d872b329b48455c668.js"></script>

We can now create our karma configuration and write some tests. Let's first make sure that our karma installation is working correctly:

  * `./node_modules/karma/bin/karma --version`

That should print out the version number to the console if everything is working correctly. If you want to, you can initialize a karma configuration file using:

  * `./node_modules/karma/bin/karma init`

I'll provide the boilerplate so you can avoid that step. Include the following configuration in a file named

**karma.conf.js**: <script src="https://gist.github.com/zpratt/0ce8c9226529c5dbb137.js"></script>

Once that file is ready, we can create a failing test to ensure our configuration is working as expected. Create a new file in src/test called **test.spec.js**. Create the directory:

  * `mkdir -p src/test`

And a test file with the following contents:

<pre>
describe("A test suite", function() {
   beforeEach(function() { });
   afterEach(function() { });
   it('should fail', function() { expect(true).to.be.false; });
});
</pre>

With our test spec in place, we can run karma and make sure that we can successfully execute failing tests. `./node_modules/karma/bin/karma start karma.conf.js`

After running our tests, we should see some output along the lines of

<pre>A test suite should fail FAILED</pre>

If so, then you've successfully configured karma with mocha, chai and sinon. Cheers!

### Update: 07/14/14

I recently updated this to use the new 0.12.x version of karma and also added an example `Gruntfile.js`
