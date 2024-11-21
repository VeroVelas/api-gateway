"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/db.ts
const promise_1 = require("mysql2/promise");
const db = (0, promise_1.createPool)({
    host: "localhost", // Cambia según tu configuración
    user: "root", // Usuario de tu base de datos
    database: "Micro", // Nombre de la base de datos
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
exports.default = db;
