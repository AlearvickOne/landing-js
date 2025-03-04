import {defineConfig} from "vite";

export default defineConfig({
    server: {
        port: 4200,
        strictPort: true,
        // https: true,
    },
    build: {
        ssr: true,
    }
})