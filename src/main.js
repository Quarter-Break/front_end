import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

//Router
import router from "./javascript/router";

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app');
