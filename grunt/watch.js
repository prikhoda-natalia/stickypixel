module.exports = {

    css: {
        files: "<%= vars.src %>/sass/**/*.sass",
        tasks: "sass"
    },
    js: {
        files: "<%= vars.js %>",
        tasks: "concat"
    },
    jekyll: {
        files: ["<%= vars.src %>/**/*.html", "<%= vars.src %>/**/*.md"],
        tasks: "jekyll"
    }
};
