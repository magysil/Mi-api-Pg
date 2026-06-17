import express from "express";
import productosRoutes from "./routes/productos.routes.js";
import "dotenv/config";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import winston from "winston";

const app = express();
const PORT = process.env.PORT || 3000;
// Logger configuration
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [new winston.transports.Console()]
});
// Security middlewares
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : "*",
  credentials: true
}));
// Rate limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false
});
app.use(limiter);
app.use(express.json());
app.use("/productos", productosRoutes);
// Global error handling middleware
app.use((err, req, res, next) => {
  logger.error(err);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || "Internal Server Error" });
});
// Export app for testing
export default app;

// Start server only when not in test environment
if (process.env.NODE_ENV !== "test") {
  const server = app.listen(PORT, () => {
    logger.info(`Servidor corriendo en el puerto:${PORT}`);
  });
  // Graceful shutdown
  process.on('SIGTERM', () => {
    logger.info('SIGTERM signal received: closing HTTP server');
    server.close(() => {
      logger.info('HTTP server closed');
      // close DB pool if needed
      // pool.end();
      process.exit(0);
    });
  });
}