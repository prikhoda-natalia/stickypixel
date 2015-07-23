module.exports = {
    "files": {
        "expand": true,
        "cwd": "",
        "src": ["<%= global.imagesPath %>**/*.{png,jpg,gif}"],
        "dest": "<%= global.buildPath %>"
    }
};