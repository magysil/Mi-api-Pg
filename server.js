import express from "express";
import productosRoutes from "./routes/productos.routes.js"
import "dotenv/config";

const app = express()
const PORT = 3000;

app.use(express.json());

app.use("/productos",productosRoutes)

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto:${PORT}`)
})