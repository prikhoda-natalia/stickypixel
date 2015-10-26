module.exports = {

    rsync: {
        options: {
            recursive: true,
            src: "<%= vars.build %>/",
            dest: "~/www/stickypixel/",
            host: "stgsear1@akascia.com",
            delete: "true",
            exclude: ["node_modules", ".gitignore", "grunt", ".git", "Gruntfile.js", "*.DS_store"],
            ssh: true,
            args: ["--verbose"],
        }
    }
};
