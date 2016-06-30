module.exports = {

	critical: {
		options: {
			base: '<%= vars.build %>',
			css: '<%= vars.css %>',
			width: 375,
			height: 568
		},
		src: '<%= vars.build %>/index.html',
		dest: '<%= vars.src %>/_includes/critical.css'
	}
}
