module.exports = {

    htmlmin: {
        options: {
            removeComments: true,
            collapseWhitespace: true
        },
        files: [{
            expand: true,
            cwd: "<%= vars.build %>/",
            src: "**/*.html",
            dest: "<%= vars.build %>/"
        }]
    }
};
