import { createRouter, createWebHistory } from 'vue-router';
import PointInfo from '@/components/map/pointInfo.vue'
import BeijingSubway from "@/components/subway/beijngSubway.vue";
import line from "@/components/line/line.vue";
import main from "@/components/main/main.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/point-info', component: PointInfo },
        { path: '/beijing-subway', component: BeijingSubway },
        { path: '/line', component: line },
        { path: '/main', component: main },

    ]
});

export default router;