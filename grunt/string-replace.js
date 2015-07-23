module.exports = {

    "build": {
        options: {
            replacements: [
                {
                    pattern: '<!--start BUILD imports',
                    replacement: '<!--start BUILD imports-->'
            },
                {
                    pattern: 'end BUILD imports-->',
                    replacement: '<!--end BUILD imports-->'
            },
                {
                    pattern: '<!--start DEV imports-->',
                    replacement: '<!--start DEV imports'
            },
                {
                    pattern: '<!--end DEV imports-->',
                    replacement: 'end DEV imports-->'
            }
        ]
        },

        "src": ["index.html"],
        "dest": "<%= global.buildPath %>index.html"
    },
};