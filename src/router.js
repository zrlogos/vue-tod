import { createRouter, createWebHistory } from 'vue-router';

import BeijingSubway from "@/components/subway/beijngSubway.vue";
import line from "@/components/line/line.vue";
import main from "@/components/main/main.vue";
import login from "@/components/login/login.vue";
import about from "@/components/main/about.vue";
import point from '@/components/map/point.vue';
import LoginPage from "@/components/login/sub/LoginPage.vue";
import ForgetPage from "@/components/login/sub/ForgetPage.vue";
import RegisterPage from "@/components/login/sub/RegisterPage.vue";
import chat from "@/components/chat/chat.vue";
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
        { path: '/', redirect: '/chat' },
        { path: '/chat', component:chat },
        { path: '/login', component: login,
            children: [
                {
                    path: '',
                    name: '/welcome-login',
                    component: LoginPage

                }, {
                    path: '/register',
                    name: 'welcome-register',
                    component: RegisterPage

                }, {
                    path: '/forget',
                    name: 'welcome-forget',
                    component: ForgetPage

                }
            ]
        },
    ],
});

// 添加全局前置守卫
// router.beforeEach((to, from, next) => {
//     const isLoggedIn = localStorage.getItem('isLoggedIn');
//     console.log(isLoggedIn);
//     if (isLoggedIn !== 'true' && to.path !== '/login') {
//         next('/login');
//     } else {
//         next();
//     }
// });

export default router;