import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Homepage from './components/posts/Homepage.vue';
import PostsList from './components/posts/PostsList.vue';
import PostDetail from './components/posts/PostDetail.vue';
import Contacts from './components/Contacts.vue';




const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Homepage },
        { path: '/posts', component: PostsList, name: 'posts' },
        { path: '/posts/:slug', component: PostDetail, name: 'post-detail' },
        { path: '/contacts', component: Contacts, name: 'contacts' }
        //Aggiungere la rotta in 404 per errori sulle rotte
        // { path: }
    ]
});

export default router;