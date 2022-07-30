import { User } from '../types/@types';
import createUser from '../models/userModel';

const creatingUser = async (user: User): Promise<User> => {
  const product = await createUser(user);
  return product;
};

export default creatingUser;