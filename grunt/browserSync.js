module.exports = {
    
    options: {
        server: {
            baseDir: "<%= vars.build %>"
        },
        notify: false
    },
    dev: {
        options: {
            watchTask: true
        },
        src: "<%= vars.bswatch %>"
    },
    build: {
        options: {
            watchTask: false
        },
        src: "<%= vars.bswatch %>"
    }
};
