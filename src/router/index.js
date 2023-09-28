import { createRouter, createWebHistory } from 'vue-router';

import AboutComponent from '../views/AboutComponent.vue';
import HomeComponent from '../views/HomeComponent.vue';

const routes = [
    {
        path: '/',
        name: 'HomeComponent',
        component: HomeComponent
    },
    {
        path: '/aboutComponent',
        name: 'AboutComponent',
        component: AboutComponent
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router