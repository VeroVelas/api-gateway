"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const app = (0, express_1.default)();
const PORT = 3004;
app.use(express_1.default.json());
app.get("/health", (req, res) => {
    res.status(200).send("Health Check OK!");
});
app.get("/", (req, res) => {
    res.status(200).send("Root Path OK!");
});
// Ruta para pedidos
app.get("/pedidos", (req, res) => {
    res.status(200).send("Pedidos Service is running!");
});
// Ruta para usuario
app.get("/usuarios", (req, res) => {
    res.status(200).send("Pedidos usuarios is running!");
});
// Proxy para el servicio de pedidos
app.use("/pedidos", (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: "http://localhost:3004", // Dirección del backend de pedidos
    changeOrigin: true,
}));
// Proxy para el servicio de usuarios
app.use("/usuarios", (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: "http://localhost:3001", // Dirección del servicio de usuarios
    changeOrigin: true,
}));
// Proxy para el servicio de productos
app.use("/productos", (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: "http://localhost:3002", // Dirección del servicio de productos
    changeOrigin: true,
}));
// Proxy para el servicio de pedidos
app.use("/pedidos", (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: "http://localhost:3003", // Dirección del servicio de pedidos
    changeOrigin: true,
}));
// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`API Gateway corriendo en http://localhost:${PORT}`);
});
