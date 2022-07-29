import { Request, Response } from 'express';
import { createProd, getProducts } from '../services/productsService';

const create = async (req: Request, res: Response) => {
  const todo = req.body;
  const result = await createProd(todo);
  return res.status(201).json(result);
};

const getAll = async (_req: Request, res: Response) => {
  const products = await getProducts();
  res.status(200).json(products);
};

export { create, getAll };
