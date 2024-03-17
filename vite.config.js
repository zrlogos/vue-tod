// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': '/src'
        },
    },
    build: {
        target: 'es2020'
    },
    server: {
        proxy: {
            '/api': {
                target: 'https://burn.hair',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '/v1')
            }
        }
    }
});