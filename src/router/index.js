import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const routes = [
    {
        name: 'Home',
        path: '/task-tracker/',
        component: Home
    },

    {
        name: 'About',
        path: '/task-tracker/about',
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;