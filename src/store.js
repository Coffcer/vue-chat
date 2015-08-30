const key = 'VUE-CHAT';

// 虚拟数据
if (!localStorage.getItem(key)) {
	let now = new Date();
	
	let data = {
		// 登录用户
		user: {
			id: 1,
			name: 'Coffce',
			img: '/build/images/1.jpg'
		},
		
		// 用户列表
		userList: [
			{
				id: 2,
				name: '示例介绍',
				img: '/build/images/2.png'
			},
			{
				id: 3,
				name: '邓紫棋',
				img: '/build/images/3.jpg'
			},
			{
				id: 4,
				name: 'Webpack',
				img: '/build/images/4.jpg'
			}
		],
		
		// 当前会话ID
		sessionId: 0,

		// 会话列表
		sessionList: [
			{
				userId: 2,
				messages: [
					{
						text: 'Hello，这是一个基于Vue + Webpack构建的简单chat示例，聊天记录保存在localStorge。简单演示了Vue的component、filter、directive、computed以及组件间的事件通讯，代码非常少。',
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
				messages: [
					{
						text: '听说下雨天，Vue和Webpack更配喔',
						date: now
					}
				]
			},
			{
				userId: 4,
				messages: []
			}
		],
	};
	
	localStorage.setItem(key, JSON.stringify(data));
}

module.exports = {
	
	fetch () {
		return JSON.parse(localStorage.getItem(key));
	},
	
	save (store) {
		localStorage.setItem(key, JSON.stringify(store));
	}

};