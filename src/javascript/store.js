/**
 * Source: https://medium.com/front-end-weekly/persisting-user-authentication-with-vuex-in-vue-b1514d5d3278
 */
import Vue from 'vue';
import Vuex from 'vuex';
import SecureLS from 'secure-ls';


Vue.use(Vuex);

let storage = {
    ISLOGGEDIN: 'isLoggedIn',
    USERNAME: 'username',
    ID: 'id',
    TOKEN: 'token',
    TIME: 'saveTime'
};

const ls = new SecureLS({encodingType: 'aes', isCompression: false});
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const today = new Date();
const date = today.getTime();

const store = new Vuex.Store({
    state: {
        isLoggedIn: ls.get(storage.ISLOGGEDIN).data,
        username: ls.get(storage.USERNAME).data,
        id: ls.get(storage.ID).data,
        token: ls.get(storage.TOKEN).data,
        date: ls.get(storage.TIME)
    },
    mutations: {
        // Add user data to state.
        [LOGIN](state, authRequest) {
            state.isLoggedIn = true;
            state.username = authRequest.username;
            state.id = authRequest.id;
            state.token = authRequest.token;

            // Persist data to ls.
            ls.set(storage.ISLOGGEDIN, {data: state.isLoggedIn});
            ls.set(storage.USERNAME, {data: state.username});
            ls.set(storage.ID, {data: state.id});
            ls.set(storage.TOKEN, {data: state.token});
            ls.set(storage.TIME, date);
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
            const saveTime = ls.get(storage.TIME);
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