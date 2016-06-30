module.exports = {

	options: {
		keepSpecialComments: 0,
		advanced: 0
	},
	cssmin: {
		src: "<%= vars.css %>",
		dest: "<%= vars.css %>"
	}
};
