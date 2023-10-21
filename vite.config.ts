import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/portfolio",
	resolve: {
		alias: {
			"@imgs": `${__dirname}/src/assets/imgs/`,
			"@documents": `${__dirname}/src/assets/documents/`,
		},
	},
});
