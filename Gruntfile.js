module.exports = function (grunt) {

    // Grunt project configuration.
    grunt.initConfig({
        sass: {
            options: {
                style: 'compressed',
                sourcemap: 'none'
            },
            dist: {
                src: 'sass/base.scss',
                dest: 'build/css/styles-compiled.css'
            }
        },

        cssnext: {
            dist: {
                src: 'build/css/styles-compiled.css',
                dest: 'build/css/styles.css'
            }
        },
    
        uglify: {
            dist: {
                src: 'js/spx-custom.js',
                dest: 'js/spx-custom.min.js'
            }
        },

        concat: {
            options: {
                nonull: true
            },
            js: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/jquery.easing/js/jquery.easing.min.js',
                    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.min.js',
                    'js/**/*.min.js'],
                dest: 'build/js/scripts.min.js'
            }
        },

        watch: {
            js: {
                files: ['js/spx-custom.min.js', 'Gruntfile.js'],
                tasks: ['uglify', 'concat:js']
            },
            css: {
                files: ['sass/**/*.scss'],
                tasks: ['sass', 'cssnext']
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-cssnext');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'cssnext', 'uglify', 'concat', 'watch']); // setup the default Grunt tasks that are run when we run only 'grunt' in the terminal
};