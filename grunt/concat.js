module.exports = {
    "options": {
        "nonull": true
    },

    "dev": {
        "src": [
            "<%= global.bowerJS %>",
            "<%= global.customJS %>"
        ],
        "dest": "<%= global.outputJS %>"
    },

    "build": {
        "src": [
            "<%= global.bowerMinJS %>",
            "<%= uglify.build.dest %>"
        ],
        "dest": "<%= uglify.build.dest %>"
    }
};