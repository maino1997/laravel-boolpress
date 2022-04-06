import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Homepage from './components/posts/Homepage.vue';
import PostsList from './components/posts/PostsList.vue';
import PostDetail from './components/posts/PostDetail.vue';



const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Homepage },
        { path: '/posts', component: PostsList },
        { path: '/posts/:slug', component: PostDetail, name: 'post-detail' },
        { path: '/contacts', component: Contacts, name: 'contacts' }
    ]
});

export default router;