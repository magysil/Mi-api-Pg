import Joi from "joi";

// Para crear producto
export const createProductoSchema = Joi.object({
  nombre: Joi.string().min(3).max(100).required()
    .messages({
      "string.empty": "El nombre es obligatorio",
      "string.min": "El nombre debe tener al menos 3 caracteres"
    }),

  precio: Joi.number().positive().required()
    .messages({
      "number.base": "El precio debe ser un número",
      "number.positive": "El precio debe ser mayor a 0"
    })
});

// Para actualizar producto
export const updateProductoSchema = Joi.object({
  nombre: Joi.string().min(3).max(100),
  precio: Joi.number().positive()
});