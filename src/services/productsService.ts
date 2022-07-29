import { Product } from '../types/@types';
import createProduct from '../models/productsModel';

const createProd = async (produc: Product): Promise<Product> => {
  const product = await createProduct(produc);
  return product;
};

export default createProd;