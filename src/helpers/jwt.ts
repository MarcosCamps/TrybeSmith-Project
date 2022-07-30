import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../types/@types';

dotenv.config();

const creatingToken = (data: Omit<User, 'password'>) => {
  const token = jwt.sign(data, process.env.JWT_SECRET as string);
  return token;
};

export default creatingToken;