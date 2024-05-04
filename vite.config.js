import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		// Allow serving files from additional directories
		fs: {
		  allow: ['C:\\Users\\idaho\\code\\tele2\\static']
		}
	  }
});
