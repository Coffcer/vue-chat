require('./list.less');

module.exports = {
    template: require('./list.tpl'),
    props: ['store'],
    data () {
        return {
            search: ''
        };
    },
    ready () {
        this.$on('search', (search) => {
            this.search = search;
        });
    },
    computed: {
        selectUserId () {
            return this.store.sessionList[this.store.sessionId].userId;
        }
    },
    methods: {
        select (index) {
            this.store.sessionId = index;
        }   
    }
};