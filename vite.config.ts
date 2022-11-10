import { defineConfig } from 'vite';
import preprocess from 'svelte-preprocess';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte({
            preprocess: [
                preprocess({
                    postcss: true
                })
            ]
        }),
        typescript()
    ]
});
