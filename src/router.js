import { createRouter, createWebHistory } from 'vue-router';

import Album from './pages/Album.vue';
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/album' },
        { path: '/album', component: Album },
        { path: '/:notFound(.*)', component: NotFound }
    ],
});

export default router;