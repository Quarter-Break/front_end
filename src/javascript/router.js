import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import Settings from "../pages/Settings";
import Artist from "../pages/Artist";
import Track from "../pages/Track";

Vue.use(VueRouter);

const routes = [
    {path: "/", redirect: "/home"},
    {path: '/home', component: Home},
    {path: '/profile', component: Profile},
    {path: '/settings', component: Settings},
    {path: '/artist', component: Artist},
    {path: '/track/:id', component: Track},
    {path: '*', component: NotFound},
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
