<div class="m-card">
	<header>
		<img class="avatar" alt="{{store.user.name}}" width="40" height="40" v-attr="src: store.user.img">
		<p class="name">{{store.user.name}}</p>
	</header>
	<footer>
		<input class="search" type="text" placeholder="search user..." v-model="search" v-on="keyup: inputing">
	</footer>
</div>