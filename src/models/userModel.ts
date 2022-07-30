import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../types/@types';

const createUser = async (user: User) => {
  const { username, classe, level, password } = user;
  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES
    (?, ?, ?, ?);`;
  const value = [username, classe, level, password];
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    query,
    value,
  );
  return { id: insertId, ...user };
};

export default createUser;
