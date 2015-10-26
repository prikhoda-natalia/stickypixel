module.exports = {

    imagemin: {
        expand: true,
        cwd: "<%= vars.src %>/img",
        src: "**/*.{png,jpg,gif,ico,svg}",
        dest: "<%= vars.build %>/img"
    }
};
