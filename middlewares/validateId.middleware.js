import { Request, Response, NextFunction } from 'express';

export const validateId = (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id) || id <= 0) {
    return res.status(400).json({ error: 'Invalid ID parameter' });
  }
  // replace param with sanitized integer string for downstream usage
  req.params.id = id.toString();
  next();
};
