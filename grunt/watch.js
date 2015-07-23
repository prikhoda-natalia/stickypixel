module.exports = {
    "options": {
        "livereload": true
    },

    "css": {
        "files": ["sass/**/*.scss"],
        "tasks": ["sass:dev", "uncss:dev", "cssnext:dev"]
    },

    "js": {
        "files": ["js/**/*.js","!<%= concat.dev.dest %>"],
        "tasks": ["concat:dev"]
    }
};