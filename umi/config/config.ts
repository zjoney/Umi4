import { defineConfig } from "@umijs/max";
import routes from "./routes";
export default defineConfig({
  npmClient: "pnpm", //指定npm的客户端
  routes,
  antd: {}, //启用antd
  tailwindcss: {},
  request: {},
  layout: {
    title: 'UMI',
    locale: false
  },
  model: {},
  initialState: {},
  proxy: {
    '/api/': {
      target: 'http://127.0.0.1:7001/',
      changeOrigin: true
    }
  },
  access: {}
});
