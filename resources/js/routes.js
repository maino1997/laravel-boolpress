import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Homepage from './components/posts/Homepage';

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Homepage },
    ]
});

export default router;