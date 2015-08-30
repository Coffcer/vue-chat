require('./card.less');

module.exports = {
	template: require('./card.tpl'),
	props: ['store'],
	data () {
		return {
			search: ''
		};
	},
	methods: {
		inputing () {
			this.$dispatch('search', this.search);
		}
	}
};