import {pool} from "../db.js";

export const obtenerproductos = async () =>{
    const {rows} = await pool.query("SELECT * FROM productos");
    return rows;
}

export const obtenerproductoId = async (id) =>{
    const {rows} = await pool.query("SELECT * FROM productos WHERE id = $1",
    [id]
    );
    return rows[0];
}

export const crearProducto = async (nombre,precio) =>{
    const {rows} = await pool.query("INSERT INTO productos (nombre,precio) VALUES ($1,$2) RETURNING *",
        [nombre,precio]
        );   
    return rows[0];
}

export const actualizarProducto = async (id,nombre,precio) => {
if (precio <= 0) {
        throw new Error("El precio debe ser mayor a cero");
    }

    // 2. Regla de Negocio: Nombre válido
    if (!nombre || nombre.trim().length === 0) {
        throw new Error("El nombre del producto no puede estar vacío");
    }

    const {rows} = await pool.query("UPDATE productos SET nombre = $1, precio = $2 WHERE id =$3 RETURNING *", 
        [nombre,precio,id]
        );  
    return rows[0];  
}

export const eliminarProducto = async (id) => {
    const { rows } = await pool.query(
        "DELETE FROM productos WHERE id = $1 RETURNING *",
        [id]
    );
    return rows[0];
}