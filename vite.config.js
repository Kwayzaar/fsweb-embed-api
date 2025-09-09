import { defineConfig } from "vite";

export default defineConfig({
	optimizeDeps: {
		include: ["tslib"]
	},

	server: {
		allowedHosts: true
	}
});
