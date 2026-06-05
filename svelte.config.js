import adapter from '@deno/svelte-adapter';

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    adapter: adapter(),
  }
};
