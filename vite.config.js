import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dotenv from "dotenv"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
		  "@": path.resolve(__dirname, "./src"),
		},
	  },
	server: {
		port: 3000,
		host: true,
	},

	define: {
		"process.env": {
			RAPID_API: JSON.stringify(process.env.VITE_RAPID_API),
			YOUTUBE_DATA_API: JSON.stringify(process.env.VITE_YOUTUBE_DATA_API),
			CLERK_PUBLISHABLE_KEY: JSON.stringify(process.env.VITE_CLERK_PUBLISHABLE_KEY),
		},
	}
});
