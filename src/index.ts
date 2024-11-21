// src/index.ts
import express from "express";
import healthRoutes from "./infrastructure/routes/healthRoutes";
import userRoutes from "./infrastructure/routes/userRoutes";
import orderRoutes from "./infrastructure/routes/OrderRouter"; // Corrección aquí

const app = express();
const PORT = 3002;

app.use(express.json());

// Configuración de rutas
app.use("/api", healthRoutes);
app.use("/usuarios", userRoutes);
app.use("/pedidos", orderRoutes);

app.listen(3002, () => {
  console.log("API corriendo en el puerto 3002");
});
