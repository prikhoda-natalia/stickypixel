module.exports = {

    "options": {
        "style": "expanded",
        "sourcemap": "none",
        "loadPath": "bower_components"
    },

    "dev": {
        "src": "<%= global.masterSass %>",
        "dest": "<%= global.outputCSS %>"
    },

    "build": {
        "src": "<%= global.masterSass %>",
        "dest": "<%= global.buildPath %><%= global.outputMinCSS %>"
    }
};