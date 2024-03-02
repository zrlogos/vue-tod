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
    server: {
        proxy: {
            '/apis': {
                target: 'https://map.bjsubway.com/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/apis/, ''),
            },
        },
    },
});
