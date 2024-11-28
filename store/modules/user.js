export default {
	state: () => ({
		user				: null,
		isLogin				: false,
		change_password		: null
	}),
	mutations: {
		setUser(state, payload) {
			state.user = payload
		},
		setChangePassword(state, payload) {
			state.change_password = payload
		},
		setLogin(state, payload) {
			state.isLogin = payload
		}
	},
	getters: {
		getterUser				: state => state.user,
		getterChangePassword	: state => state.change_password,
		getterLogin				: state => state.isLogin
	},
	actions: {
		// =================================================================
		//  USER ACTIONS
		// =================================================================
		updateLoginUser({ commit }, payload) {
			
			if( payload.data_user ){
				
				commit('setUser', payload.data_user );
				commit('setLogin', true);
			}
			else if( ['/pages/'].find( (item) => payload.current_route.indexOf(item) >= 0 ) ){
				
				this.$router.push('/account/login');
			}
		},
		async loginUser({ commit }, payload) {
			
			await this.$apiTest.$post(`/users/login`, payload).then( (axios_response) => { 
				
				const { body } 	= axios_response;
				let data_user 	= {
					id		: body.user.id,
					name	: body.user.name,
					email	: body.user.email,
				};
				
				this.$cookies.set('user-app'	, JSON.stringify( data_user ), { path: '/', maxAge: 60 * 60 * 24 * 7 });

				commit('setUser', data_user);
				commit('setLogin', true);
				
				commit('setNotification', { content: { type: 'request' }, type: 'success', body: { title: `Hello ${ body.user.name }`, message: "Welcome to Test IKBO" } });
				
			}).catch((axios_error) => {

				commit('setNotification', { content: { type: 'request' }, type: 'error', body: axios_error.response.data });
			});
		},
		async createUser({ commit }, payload) {
			
			await this.$apiTest.$post(`/users/create`, payload).then( (axios_response) => { 
				
				const { body } 	= axios_response;
				let data_user 	= {
					id				: body.id,
					name			: body.name,
					email			: body.email,
				};
				
				this.$cookies.set('user-app'	, JSON.stringify( data_user ), { path: '/', maxAge: 60 * 60 * 24 * 7 });

				commit('setUser', data_user);
				commit('setLogin', true);
				commit('setNotification', { content: { type: 'request' }, type: 'success', body: { title: `Hello ${ body.user.name }`, message: "Welcome to Test IKBO" } });
				
			}).catch((axios_error) => {
				
				commit('setNotification', { content: { type: 'request' }, type: 'error', body: axios_error.response.data });
			});
		},
		async logoutUser({ commit }, payload) {
			
			this.$cookies.remove('user-app');
			
			commit('setUser', null);
			commit('setLogin', false);
		},
		async updateUserPassword({ commit }, payload) {
			
			await this.$apiTest.$put(`/users/update-password`,payload).then( (axios_response) => {
				
				const { title, message } = axios_response;
				
				commit('setNotification', { content: { type: 'request' }, type: 'success', body: { title: title, message: message } });
				
				commit('setChangePassword', { body: { message: "Successfully Updated Password" }});
			}).catch((axios_error) => {
				
				commit('setNotification', { content: { type: 'request' }, type: 'error', body: axios_error.response.data });
			});
		}
	}
}
