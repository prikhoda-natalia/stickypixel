module.exports = {

    "masterSass":   "sass/base.scss", // Path to the SASS development file
    "outputCSS":    "css/styles.css",  // Required Output Path
    "outputMinCSS": "css/styles.min.css",
    "customJS":     "js/spx-custom.js", // Path to the JS development file
    "outputJS":     "js/scripts.js",
    "outputMinJS":  "js/scripts.min.js",
    "buildPath":    "build/",          // Path to the desired build folder
    "imagesPath":   "img/",
    "bowerJS":      ["bower_components/jquery/dist/jquery.js",
                    "bower_components/jquery.easing/js/jquery.easing.js",
                    "bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js"
                    ],
    "bowerMinJS":   ["bower_components/jquery/dist/jquery.min.js",
                    "bower_components/jquery.easing/js/jquery.easing.min.js",
                    "bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.min.js"
                    ]

};