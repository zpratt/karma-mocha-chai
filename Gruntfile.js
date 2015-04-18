module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        eslint: {
            target: ['./Gruntfile.js', 'test/*.spec.js', 'src/**/*.js']
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true,
                reporters: 'progress',
                runnerPort: 9998
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['eslint', 'karma']);
};
