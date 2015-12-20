const key = 'VUE-CHAT';

// 虚拟数据
if (!localStorage.getItem(key)) {
    let now = new Date();
    
    let data = {
        // 登录用户
        user: {
            id: 1,
            name: 'Coffce',
            img: 'build/images/1.jpg'
        },
        
        // 用户列表
        userList: [
            {
                id: 2,
                name: '示例介绍',
                img: 'build/images/2.png'
            },{
                id: 3,
                name: 'webpack',
                img: 'build/images/3.jpg'
            }
        ],

        // 会话列表
        sessionList: [
            {
                userId: 2,
                messages: [
                    {
                        text: 'Hello，这是一个基于Vue + Webpack构建的简单chat示例，聊天记录保存在localStorge。简单演示了Vue的基础特性和webpack配置。',
                        date: now
                    }, 
                    {
                        text: '项目地址: https://github.com/coffcer/vue-chat',
                        date: now
                    }
                ]
            },
            {
                userId: 3,
                messages: []
            }
        ],
    };
    
    localStorage.setItem(key, JSON.stringify(data));
}

export default {
    
    fetch () {
        return JSON.parse(localStorage.getItem(key));
    },
    
    save (store) {
        localStorage.setItem(key, JSON.stringify(store));
    }

};