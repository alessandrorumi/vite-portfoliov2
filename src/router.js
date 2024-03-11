import { createRouter, createWebHistory } from 'vue-router';
import Landing from './components/Landing.vue';
import Main from './pages/Main.vue';

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/main',
        name: 'Main',
        component: Main
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
