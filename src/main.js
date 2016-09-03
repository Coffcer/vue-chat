// polyfill
import 'babel-polyfill';

import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';

Vue.use(Vuex);

import store from './store';

new Vue({
    el: 'body',
    components: { App },
    store: new Vuex.Store(store)
});
