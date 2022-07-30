import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../types/@types';

dotenv.config();

const SECRET = process.env.JWT_SECRET || 'segredo';
const creatingToken = (data: Omit<User, 'password'>) => {
  const token = jwt.sign(data, SECRET as string);
  return token;
};

export default creatingToken;