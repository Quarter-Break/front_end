import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

// External components:
import router from "./javascript/router";
import store from "./javascript/store";

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app');
