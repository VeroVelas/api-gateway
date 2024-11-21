// src/index.ts
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = 3000;

app.use(express.json());

// Health Check del Gateway
app.get("/health", (req, res) => {
  res.status(200).send("API Gateway is healthy!");
});

// Proxy para el servicio de usuarios
app.use(
  "/usuarios",
  createProxyMiddleware({
    target: "http://localhost:3001", // Dirección del servicio de usuarios
    changeOrigin: true,
  })
);

// Proxy para el servicio de productos
app.use(
  "/productos",
  createProxyMiddleware({
    target: "http://localhost:3002", // Dirección del servicio de productos
    changeOrigin: true,
  })
);

// Proxy para el servicio de pedidos
app.use(
  "/pedidos",
  createProxyMiddleware({
    target: "http://localhost:3003", // Dirección del servicio de pedidos
    changeOrigin: true,
  })
);

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`API Gateway corriendo en http://localhost:${PORT}`);
});
