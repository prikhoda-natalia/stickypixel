module.exports = {

    "build": {
        options: {
            replacements: [
                {
                    pattern: '<!--start BUILD styles',
                    replacement: '<!--start BUILD styles-->'
            },
                {
                    pattern: 'end BUILD styles-->',
                    replacement: '<!--end BUILD styles-->'
            },
                {
                    pattern: '<!--start DEV styles-->',
                    replacement: '<!--start DEV styles'
            },
                {
                    pattern: '<!--end DEV styles-->',
                    replacement: 'end DEV styles-->'
            },

                {
                    pattern: '<!--start BUILD scripts',
                    replacement: '<!--start BUILD scripts-->'
            },
                {
                    pattern: 'end BUILD scripts-->',
                    replacement: '<!--end BUILD scripts-->'
            },
                {
                    pattern: '<!--start DEV scripts-->',
                    replacement: '<!--start DEV scripts'
            },
                {
                    pattern: '<!--end DEV scripts-->',
                    replacement: 'end DEV scripts-->'
            }

        ]
        },

        "src": ["index.html"],
        "dest": "<%= global.buildPath %>index.html"
    },
};