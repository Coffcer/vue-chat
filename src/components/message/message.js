require('./message.less');

module.exports = {
    template: require('./message.tpl'),
    props: ['store'],
    filters: {
        avatar (item) {
            if (item.self) {
                return this.store.user.img;
            }
            
            let session = this.store.sessionList[this.store.sessionId],
                user = this.store.userList.filter(user => user.id === session.userId)[0];
            
            return user && user.img;
        }
    },
    directives: {
        // 发送消息后滚动到底部
        'scroll-bottom': function () {
            Vue.nextTick(() => {
                this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight;
            });
        }
    }
};