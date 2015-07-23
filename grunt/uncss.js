module.exports = {
    "options": {
        "ignore": [
            /spx/,
            // Bootstrap selectors added via JS - those not needed are commented out.
            /\w\.in/,
            ".fade",
            ".collapse",
            ".collapsing",
            // /(#|\.)navbar(\-[a-zA-Z]+)?/,
            // /(#|\.)dropdown(\-[a-zA-Z]+)?/,
            // /(#|\.)(open)/,

            // injected via JS

            // /disabled/,
            // /fa-chevron-up/,
            // currently only in a IE conditional, so uncss doesn't see it
            // ".close",
            //".alert-dismissible"
        ],
        "ignoreSheets": [/font/]
    },

    "dev": {
        "src": "index.html",
        "dest": "<%= sass.dev.dest %>"
    },

    "build": {
        "src": "<%= global.buildPath %>index.html",
        "dest": "<%= sass.build.dest %>"
    }
};