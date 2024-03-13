import { createRouter, createWebHistory } from 'vue-router';
import PointInfo from '@/components/map/pointInfo.vue'
import BeijingSubway from "@/components/subway/beijngSubway.vue";
import line from "@/components/line/line.vue";
import main from "@/components/main/main.vue";
import login from "@/components/login/login.vue"
import about from "@/components/main/about.vue"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/main', component: main,
            children:[
                { path: '/point-info', component: PointInfo },
                { path: '/beijing-subway', component: BeijingSubway },
                { path: '/line', component: line },
                {path:'/about',component:about},
            ]
        },
        { path: '/', component: login },
        { path: '/login', component: login }

    ]
});

// 添加全局前置守卫
// 添加全局前置守卫
router.beforeEach((to, from, next) => {
    // 获取用户登录状态
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    // 如果用户未登录,并且要访问的不是登录页面
    if (!isLoggedIn && to.path !== '/login') {
        // 则重定向到登录页面
        next('/login')
    } else {
        // 否则继续导航
        next()
    }
})
export default router;