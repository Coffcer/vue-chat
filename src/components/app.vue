<script>
    import store from '../store';
    import card from './card';
    import list from './list';
    import text from './text';
    import message from './message';

    export default {
        el: '#chat',
        data () {
            let serverData = store.fetch();

            return {
                // 登录用户
                user: serverData.user,
                // 用户列表
                userList: serverData.userList,
                // 会话列表
                sessionList: serverData.sessionList,
                // 搜索key
                search: '',
                // 选中的会话Index
                sessionIndex: 0
            };
        },
        computed: {
            session () {
                return this.sessionList[this.sessionIndex];
            }
        },
        watch: {
            // 每当sessionList改变时，保存到localStorage中
            sessionList: {
                deep: true,
                handler () {
                    store.save({
                        user: this.user,
                        userList: this.userList,
                        sessionList: this.sessionList
                    });
                }
            }
        },
        components: {
            card, list, text, message
        }
    };

</script>

<template>
    <div>
        <div class="sidebar">
            <card :user="user" :search.sync="search"></card>
            <list :user-list="userList" :session="session" :session-index.sync="sessionIndex" :search="search"></list>
        </div>
        <div class="main">
            <message :session="session" :user="user" :user-list="userList"></message> 
            <text :session="session"></text>
        </div>
    </div>
</template>

<style lang="less">
    #chat {
        overflow: hidden;
        border-radius: 3px;
        
        .sidebar, .main {
            height: 100%;   
        }
        .sidebar {
            float: left;
            width: 200px;
            color: #f4f4f4;
            background-color: #2e3238;
        }
        .main {
            position: relative;
            overflow: hidden;   
            background-color: #eee;
        }
        .m-text {
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
        }
        .m-message {
            height: ~'calc(100% - 160px)';
        }
    }
</style>