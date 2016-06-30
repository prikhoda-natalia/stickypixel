module.exports = {

	// Development Files
	src: "source",
	sass: "<%= vars.src %>/sass/main.sass",
	js: "<%= vars.src %>/js/**/*.js",
	images: "<%= vars.src %>/img/",

	// Build Files
	build: "build",
	css: "<%= vars.build %>/css/styles.css",
	buildjs: "<%= vars.build %>/js/scripts.js",

	// Bower Components
	bowerjs: "bower_components/jquery/dist/jquery.min.js",

	// BrowserSync Watch Files
	bswatch: ["<%= vars.build %>/**/*.html", "<%= vars.css %>", "<%= vars.buildjs %>"]
};
