// src/infrastructure/db.ts
import { createPool, Pool } from "mysql2/promise";

const db: Pool = createPool({
  host: "localhost",        // Cambia según tu configuración
  user: "root",             // Usuario de tu base de datos
  database: "Micro", // Nombre de la base de datos
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default db;
