<div class="m-list">
	<ul>
		<li v-repeat="item in store.userList" 
			v-on="click: select($index)"
			v-class="active: selectUserId === item.id"
			v-show="item.name.indexOf(search) > -1">
			<img class="avatar" alt="{{item.name}}" width="30" height="30" v-attr="src: item.img">
			<p class="name">{{item.name}}</p>
		</li>
	</ul>
</div>