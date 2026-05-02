import "dotenv/config";
import pkg from "pg";

const { Pool } = pkg;

/* export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
}); */

// Render proporciona una URL completa, por lo que usamos connectionString
export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, // Obligatorio para que Render acepte la conexión segura
    },
});

// Opcional: Un log para confirmar que la conexión está intentando establecerse
pool.on('connect', () => {
    console.log('Conectado a la base de datos PostgreSQL en Render');
});