<div class="m-message" v-scroll-bottom="store.sessionList[store.sessionId].messages">
	<ul>
		<li v-repeat="item in store.sessionList[store.sessionId].messages">
			<p class="time"><span>{{item.date | time}}</span></p>
			<div class="main" v-class="self: item.self">
				<img class="avatar" v-attr="src: item | avatar" width="30" height="30" />
				<div class="text">{{item.text}}</div>
			</div>
		</li>
	</ul>
</div>