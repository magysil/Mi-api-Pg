import * as productoService from "../services/productos.service.js"
import {
  createProductoSchema,
  updateProductoSchema
} from "../validators/productos.validator.js";


export const getProductos = async (req,res)=>{
    try {
        const productos = await productoService.obtenerproductos();
        res.json(productos)
    } catch (error) {
        console.error("DETALLE DEL ERROR:", error.message); 
        res.status(500).json({ error: "Error al obtener productos", info: error.message });
    }
}

export const getProductoId = async(req,res) => {
    try {
       const id = parseInt(req.params.id) 
       const producto = await productoService.obtenerproductoId(id)

         if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(producto);
    } catch (error) {
        console.error("DETALLE DEL ERROR:", error.message); 
        res.status(500).json({ error: "Error al obtener producto", info: error.message });         
    }
}

export const creatProducto = async(req,res) => {
    /* const { error } = createProductoSchema.validate(req.body, {
        abortEarly: true,
        allowUnknown: false
    });
    
    if (error) {
    return res.status(400).json({
      error: error.details[0].message
    });
  } */

    try {
       const {nombre,precio} = req.body  
       const nuevoProducto = await productoService.crearProducto(nombre,precio)
        res.status(201).json(nuevoProducto);        

    
    } catch (error) {
        console.error("DETALLE DEL ERROR:", error.message);
        res.status(500).json({ error: "Error al crear producto", info: error.message });          
    }
}

export const updateProducto = async(req,res) => {
    /* const { error } = updateProductoSchema.validate(req.body, {
        abortEarly: true,
        allowUnknown: false
    });

    if (error) {
    return res.status(400).json({
        error: error.details[0].message
        });
    } */
    try {
       const id = parseInt(req.params.id);
       const {nombre,precio} = req.body;

       const productoActualizado = await productoService.actualizarProducto(id,nombre,precio)

        if (!productoActualizado) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(productoActualizado);
    } catch (error) {
        console.error("DETALLE DEL ERROR:", error.message);        
        res.status(400).json({ error: "Error al actualizar el producto", info: error.message });
        
            
    }
}

export const deleteProducto = async(req,res) => {
    try {
        const id = parseInt(req.params.id);
        const productoEliminado = await productoService.eleminarProducto(id)

        if (!productoElimiando) {
        return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.json({ mensaje: "Producto eliminado", producto: productoEliminado});

    } catch (error) {
        console.error("DETALLE DEL ERROR:", error.message); 
        res.status(500).json({ error: "Error al eliminar el producto", info: error.message });
    }
}