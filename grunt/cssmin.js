module.exports = {

    options: {
        keepSpecialComments: 0,
        advanced: 0
    },

    "build": {
        "src": ["<%= cssnext.build.dest %>"],
        "dest": "<%= cssnext.build.dest %>"
    }
};