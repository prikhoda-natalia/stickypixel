module.exports = {

	options: {
		nonull: true
	},
	concat: {
		src: [
			"<%= vars.bowerjs %>",
			"<%= vars.js %>"
		],
		dest: "<%= vars.buildjs %>"
	}
};
