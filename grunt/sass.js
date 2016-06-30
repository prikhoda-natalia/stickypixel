module.exports = {

	options: {
		style: "expanded",
		sourcemap: "none",
		loadPath: "bower_components"
	},
	sass: {
		src: "<%= vars.sass %>",
		dest: "<%= vars.css %>"
	}
};
