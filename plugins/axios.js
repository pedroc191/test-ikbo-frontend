export default function({ $axios, $config, app }, inject) {
    
    const apiTest       = $axios.create({
        baseURL: $config.apiTest.baseURL,
        headers: $config.apiTest.headers
    });
    apiTest.interceptors.request.use((config) => {
        const userToken = app.$cookies.get('token-app');
        config.url = `${ config.url }${ config.url.indexOf('?') >= 0 ? `&` : `?` }app_version=${ app.$cookies.get('app-version') }`;
        if (userToken) {
            config.headers.common['x-access-token'] = userToken;
        } else {
            config.headers.common['x-access-token'] = $config.apiTest.defaultToken;
        }
        return config;
    }, (error) => {
        
        return Promise.reject(error);
    });
    apiTest.interceptors.response.use(function (response) {
        
        if( response.data?.app_version && `${ app.$cookies.get('app-version') }` == 'null' ){

            app.$cookies.set('app-version', response.data?.app_version, { path: '/', maxAge: 60 * 60 * 24 * 7 } );
        }
        return response;
    }, function (error) {

        return Promise.reject(error);
    });

    inject('apiTest'        , apiTest);
};