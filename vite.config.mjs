import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import deno from '@deno/vite-plugin';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [sveltekit(), deno()],
});