export default {
    state: () => ({
        variants: [],
        locations: [],
        inventory_variants: [],
    }),
    mutations: {
        setVariants(state, payload) {
            state.variants = payload;
        },
        setLocations(state, payload) {
            state.locations = payload;
        },
        setInventoryVariants(state, payload) {
            state.inventory_variants = payload;
        }
    },
    getters: {
        getterVariants					: state => state.variants,
        getterLocations					: state => state.locations,
        getterInventoryVariants			: state => state.inventory_variants
    },
    actions: {
        async getInventoryVariantData({ commit }, payload){
            
            await this.$apiTest.$post('/inventory-variants/list', payload).then( (axios_response) => {
                commit('setInventoryVariants', axios_response.body);
            }).catch((axios_error) => {
                commit('setNotification', { content: { type: 'request' }, type: 'error', body: axios_error.response.data });
            });
        },
        async getVariantData({ commit }, payload){
            
            await this.$apiTest.$post('/products/list', payload).then( (axios_response) => {
                commit('setVariants', axios_response.body);
            }).catch((axios_error) => {
                commit('setNotification', { content: { type: 'request' }, type: 'error', body: axios_error.response.data });
            });
        },
        async getLocationData({ commit }, payload){
            
            await this.$apiTest.$post('/inventory-locations/list', payload).then( (axios_response) => {
                commit('setLocations', axios_response.body);
            }).catch((axios_error) => {
                commit('setNotification', { content: { type: 'request' }, type: 'error', body: axios_error.response.data });
            });
        },
        async registerInventoryVariant({ commit }, payload){
            
            await this.$apiTest.$post('/inventory-variants/create', payload).then( (axios_response) => {
                
                commit('setNotification', { content: { type: 'request' }, type: 'success', body: axios_response });
            }).catch((axios_error) => {
                commit('setNotification', { content: { type: 'request' }, type: 'error', body: axios_error.response.data });
            });
        },
        async registerInventoryTransaction({ commit }, payload){
            
            await this.$apiTest.$post('/inventory-transactions/create', payload).then( (axios_response) => {
                
                commit('setNotification', { content: { type: 'request' }, type: 'success', body: axios_response });
            }).catch((axios_error) => {
                commit('setNotification', { content: { type: 'request' }, type: 'error', body: axios_error.response.data });
            });
        },
        async registerProduct({ commit }, payload){
            
            await this.$apiTest.$post('/products/create', payload).then( (axios_response) => {
                
                commit('setNotification', { content: { type: 'request' }, type: 'success', body: axios_response });
            }).catch((axios_error) => {
                commit('setNotification', { content: { type: 'request' }, type: 'error', body: axios_error.response.data });
            });
        }
    }
}