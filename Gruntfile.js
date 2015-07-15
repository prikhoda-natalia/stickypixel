module.exports = function (grunt) {

    // Grunt project configuration.
    grunt.initConfig({
        
        // CSS Operators
        sass: {
            options: {
                style: 'compressed',
                sourcemap: 'none'
            },
            dist: {
                src: 'sass/base.scss',
                dest: 'sass/styles-compiled.css'
            }
        },

        cssnext: {
            dist: {
                src: 'sass/styles-compiled.css',
                dest: 'build/css/styles.css'
            }
        },
    
        // Javascript Operators
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
                    'js/spx-custom.min.js'],
                dest: 'build/js/scripts.min.js'
            }
        },

        // Watch Operations
        watch: {
            css: {
                files: ['sass/**/*.scss'],
                tasks: ['sass', 'cssnext']
            },
            js: {
                files: ['js/spx-custom.js', 'Gruntfile.js'],
                tasks: ['uglify', 'concat:js']
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