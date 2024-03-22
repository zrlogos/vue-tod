import { createRouter, createWebHistory } from 'vue-router';
import line from "@/components/line/lineView.vue";
import main from "@/components/main/main.vue";
import login from "@/components/login/login.vue";
import about from "@/components/main/about.vue";
import point from '@/components/map/point.vue';
import LoginPage from "@/components/login/sub/LoginPage.vue";
import ForgetPage from "@/components/login/sub/ForgetPage.vue";
import RegisterPage from "@/components/login/sub/RegisterPage.vue";
import amap from "@/components/amap/MapContainer.vue";
import chat from "@/components/chat/chat.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/main',
            component: main,
            redirect:'/about',
            children: [
                { path: '/point-info', component: point },
                { path: '/line', component: line },
                { path: '/about', component: about },
                { path: '/chat', component:chat },
            ],
        },
        { path: '/', redirect: '/login' },
        {path: '/test', component:amap},
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