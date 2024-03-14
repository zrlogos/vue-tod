// vite.config.js
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': '/src'
        },
    },
    build: {
        target: 'es2020' // 将这里设置为你当前 Node.js 版本对应的 ECMAScript 版本
    }
});
