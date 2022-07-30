import { Request, Response } from 'express';
import creatingUser from '../services/userService';
import creatingToken from '../helpers/jwt';

const creatingLogin = async (req: Request, res: Response) => {
  const userId = await creatingUser(req.body);
  const { password, ...newUser } = req.body;
  const token = creatingToken({ id: userId, ...newUser });
  return res.status(201).json({ token });
};

export default creatingLogin;