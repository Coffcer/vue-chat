// polyfill
import 'babel-polyfill';

import Vue from 'vue';
import App from './App';

import store from './store';

new Vue({
    el: 'body',
    components: { App },
    store: store
});
