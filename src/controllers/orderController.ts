import { Request, Response } from 'express';
import getAll from '../services/orderService';

const gettingOrders = async (_req: Request, res: Response) => {
  const result = await getAll();
  res.status(200).json(result);
};

export default gettingOrders;