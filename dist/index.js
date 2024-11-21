"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const healthRoutes_1 = __importDefault(require("./infrastructure/routes/healthRoutes"));
const userRoutes_1 = __importDefault(require("./infrastructure/routes/userRoutes"));
const OrderRouter_1 = __importDefault(require("./infrastructure/routes/OrderRouter")); // Corrección aquí
const app = (0, express_1.default)();
const PORT = 3002;
app.use(express_1.default.json());
// Configuración de rutas
app.use("/api", healthRoutes_1.default);
app.use("/usuarios", userRoutes_1.default);
app.use("/pedidos", OrderRouter_1.default);
app.listen(3002, () => {
    console.log("API corriendo en el puerto 3002");
});
