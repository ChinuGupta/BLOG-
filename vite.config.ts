// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

/// vite.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  server: {
    host: true,
    port: 5173,
  },
  test: {
    globals: true,
    setupFiles: "./setupTests.ts",
    environment: "jsdom",
  },
});
