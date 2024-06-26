import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://fakestoreapi.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
}
