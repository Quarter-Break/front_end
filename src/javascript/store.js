/**
 * Source: https://medium.com/front-end-weekly/persisting-user-authentication-with-vuex-in-vue-b1514d5d3278
 */
import Vue from 'vue';
import Vuex from 'vuex';
import SecureLS from 'secure-ls';


Vue.use(Vuex);

const ls = new SecureLS({encodingType: 'aes', isCompression: false});
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const today = new Date();
const date = today.getTime();

const store = new Vuex.Store({
    state: {
        isLoggedIn: ls.get('isLoggedIn').data,
        username: ls.get('username').data,
        token: ls.get('token').data,
        date: ls.get('saveTime')
    },
    mutations: {
        // Add user data to state.
        [LOGIN](state, authRequest) {
            state.isLoggedIn = true;
            state.username = authRequest.username;
            state.token = authRequest.token;

            // Persist data to ls.
            ls.set('isLoggedIn', {data: state.isLoggedIn});
            ls.set('username', {data: state.username});
            ls.set('token', {data: state.token});
            ls.set('saveTime', date);
        },
        // Remove all data from state and clear ls.
        [LOGOUT](state) {
            state.isLoggedIn = false;
            state.username = null;
            state.token = null;
            ls.clear();
        }
    },
    actions: {
        login({commit}, authRequest) {
            return new Promise(resolve => {
                setTimeout(() => {
                    commit(LOGIN, authRequest);
                    resolve();
                }, 1000);
            });
        },
        logout({commit}) {
            commit(LOGOUT);
        }
    },
    getters: {
        isLoggedIn: state => {
            return state.isLoggedIn;
        },
        username: state => {
            return state.username;
        },
        token: state => {
            // Get date the token was saved to ls.
            const saveTime = ls.get('saveTime');
            // Get current date minus 7 days.
            const current = today.getTime() - 86400000;
            if (saveTime > current) {
                return state.token;
            } else {
                // Logout. Should be the commit but this will do for now.
                state.isLoggedIn = false;
                state.username = null;
                state.token = null;
                ls.clear();
            }
        }
    }
});

export default store