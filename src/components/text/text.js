require('./text.less');

module.exports = {
    template: require('./text.tpl'),
    props: ['store'],
    data () {
        return {
            text: ''
        };
    },
    methods: {
        inputing (e) {
            if (e.ctrlKey && e.keyCode === 13 && this.text.length) {
                this.store.sessionList[this.store.sessionId].messages.push({
                    text: this.text,
                    date: new Date(),
                    self: true
                });
                this.text = '';
            }
        }
    }
};