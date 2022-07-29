import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product } from '../types/@types';

const createProduct = async (product: Product) => {
  const { name, amount } = product;
  const query = `INSERT INTO Trybesmith.Products (name, amount)
      VALUES
    (?, ?);`;
  const value = [name, amount];
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    query,
    value,
  );
  return { id: insertId, ...product };
};

const getAllProducts = async () => {
  const query = 'SELECT * from Trybesmith.Products';
  const [products] = await connection.execute<ResultSetHeader>(query);
  return products;
};

export { createProduct, getAllProducts };
