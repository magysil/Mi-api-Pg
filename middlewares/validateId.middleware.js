export const validateId = (req, res, next) => {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({ error: "El ID debe ser un número válido." });
  }
  
  next();
};
