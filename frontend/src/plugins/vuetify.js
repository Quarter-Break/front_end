import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#465775', // Independence
                secondary: '#59C9A5', // Ocean Green
                accent: '#EF6F6C', // Light Coral
                error: '#b71c1c',
            },
        },
    },
});
