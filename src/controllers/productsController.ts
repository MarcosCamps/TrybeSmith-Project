import { Request, Response } from 'express';
import createProd from '../services/productsService';

const create = async (req: Request, res: Response) => {
  const todo = req.body;
  const result = await createProd(todo);
  return res.status(201).json(result);
};

export default create;