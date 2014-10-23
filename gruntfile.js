module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },

        watch: {
            karma: {
                files: ['app/**/*.js', 'app/tests/**/*.js'],
                tasks: ['karma:unit:run']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    //grunt.registerTask('default', ['karma']);
    grunt.registerTask('default', ['karma:unit', 'watch']);
};
