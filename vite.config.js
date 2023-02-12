import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  __VALUE__: process.env.VALUE,
})



// import vue from '@vitejs/plugin-vue'
// import { defineConfig, loadEnv } from 'vite'
// import dotenv from 'dotenv'

// dotenv.config() // load env vars from .env
// export default defineConfig(({ command, mode }) => {
//   // Load env file based on `mode` in the current working directory.
//   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
//   const env = loadEnv(mode, process.cwd(), '')
//   return {
//     // vite config
//     define: {
//       __APP_ENV__: env.APP_ENV,
//       __VALUE__: process.env.VALUE
//     },
//     plugins: [vue()],
//   }
// })