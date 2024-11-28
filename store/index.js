import Vue  		from 'vue'
import Vuex 		from 'vuex'

import user    from './modules/user.js';
import inventory   	from './modules/inventory.js';

Vue.use(Vuex);
const createStore = () => {
	return new Vuex.Store({
		state: {
			app_version         : null,
			notification    	: null,
		},
		getters: {
			getterAppVersion        : state => state.app_version,
			getterNotification		: state => state.notification
		},
		mutations: {
			setAppVersion(state, payload) {
				state.app_version = payload
			},
			setNotification(state, payload) {
				state.notification = payload;
			},
		},
		actions: {
			addNotification({ commit }, payload) {
				
				commit('setNotification', payload);
			},
		},
		modules: {
			user,
			inventory
		}
	});
}
export default createStore
