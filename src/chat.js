require('./chat.less');

const store = require('./store');

Vue.config.debug = true;

const chat = new Vue({
	el: '#chat',
	template: require('./chat.tpl'),
	data: {
		store: store.fetch()
	},
	ready () {
		this.$on('search', (search) => {
			this.$broadcast('search', search);
		});
	},
	watch: {
		// 每当sessionList改变时，保存到localStorage中
		'store.sessionList': {
			handler () {
				store.save(this.store);
			},
			deep: true
		}
	},
	filters: {
		time (date) {
			if (typeof date === 'string') {
				date = new Date(date);
			}
			
			return date.getHours() + ':' + date.getMinutes();
		}
	},
	components: {
		card: require('./components/card/card'),
		list: require('./components/list/list'),
		text: require('./components/text/text'),
		message: require('./components/message/message')
	}
});