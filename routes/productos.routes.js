import {Router} from "express";
import{getProductos,getProductoId,creatProducto,updateProducto,deleteProducto} from "../controllers/producto.controllers.js"
import { validate } from "../middlewares/validate.middleware.js";
import { createProductoSchema, updateProductoSchema } from "../validators/productos.validator.js";

const router = Router();

router.get("/", getProductos);
router.get("/:id",getProductoId);
router.post("/",validate(createProductoSchema),creatProducto);
router.put("/:id",validate(updateProductoSchema),updateProducto);
router.delete("/:id",deleteProducto);

export default router