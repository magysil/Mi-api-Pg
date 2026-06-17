import {Router} from "express";
import{getProductos,getProductoId,creatProducto,updateProducto,deleteProducto} from "../controllers/producto.controllers.js"
import { validate } from "../middlewares/validate.middleware.js";
import { validateId } from "../middlewares/validateId.middleware.js";
import { createProductoSchema, updateProductoSchema } from "../validators/productos.validator.js";

const router = Router();

router.get("/", getProductos);
router.get("/:id", validateId, getProductoId);
router.post("/",validate(createProductoSchema),creatProducto);
router.put("/:id", validateId, validate(updateProductoSchema),updateProducto);
router.delete("/:id", validateId, deleteProducto);

export default router