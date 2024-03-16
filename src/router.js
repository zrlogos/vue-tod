import { createRouter, createWebHistory } from 'vue-router';

import BeijingSubway from "@/components/subway/beijngSubway.vue";
import line from "@/components/line/line.vue";
import main from "@/components/main/main.vue";
import login from "@/components/login/login.vue";
import about from "@/components/main/about.vue";
import sub_map from '@/components/map/sub_map.vue';
import point from '@/components/map/point.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/main',
            component: main,
            children: [
                { path: '/point-info', component: point },
                { path: '/beijing-subway', component: BeijingSubway },
                { path: '/line', component: line },
                { path: '/about', component: about },
            ],
        },
        { path: '/', redirect: '/login' },
        { path: '/login', component: login },
    ],
});

// 添加全局前置守卫
router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log(isLoggedIn);
    if (isLoggedIn !== 'true' && to.path !== '/login') {
        next('/login');
    } else {
        next();
    }
});

export default router;