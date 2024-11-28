import Vue from 'vue'
import ZoomOnHover from 'vue-zoom-on-hover';
import vSelect from 'vue-select'
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full.esm';
import VueScrollTo from 'vue-scrollto'
import Toast from 'vue-toastification';

Vue.use(Toast, { transition: 'Vue-Toastification__fade', maxToasts: 20, newestOnTop: true });
Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);
Vue.component('v-select', vSelect);
Vue.use(ZoomOnHover);
Vue.use(VueScrollTo);