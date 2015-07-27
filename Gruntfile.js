// Gruntfile.js
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-cssnext');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-rsync-2');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    
    require('load-grunt-config')(grunt);

    grunt.registerTask('dev', ['sass:dev', 'uncss:dev', 'cssnext:dev', 'concat:dev', 'watch']);
    grunt.registerTask('build', ['string-replace:build', 'htmlmin:build', 'sass:build', 'uncss:build', 'cssnext:build', 'cssmin:build', 'uglify:build', 'concat:build']);
    grunt.registerTask('deploy', ['rsync']);
};