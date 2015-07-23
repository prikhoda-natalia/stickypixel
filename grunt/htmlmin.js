module.exports = {

    "build": {
        options: {
            removeComments: true,
            collapseWhitespace: true
        },
        "src": ["<%= global.buildPath %>index.html"],
        "dest": "<%= global.buildPath %>index.html"
    }
};