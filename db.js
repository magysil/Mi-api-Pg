import pg from 'pg';

const isProduction = process.env.DATABASE_URL ? true : false;
const connectionString = isProduction 
  ? process.env.DATABASE_URL 
  : 'postgres://usuario:password@localhost:5432/tu_base_local';

const pool = new pg.Pool({
  connectionString,
  ssl: isProduction ? { rejectUnauthorized: false } : false
});

pool.query('SELECT NOW()')
  .then(() => console.log(isProduction ? "✅ Conectado a PostgreSQL en la nube (Render)" : "🏠 Conectado a PostgreSQL Local"))
  .catch(err => console.error("❌ Error de conexión:", err));

export default pool;