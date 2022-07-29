import { Product } from '../types/@types';
import { createProduct, getAllProducts } from '../models/productsModel';

const createProd = async (produc: Product): Promise<Product> => {
  const product = await createProduct(produc);
  return product;
};

const getProducts = async () => {
  const products = await getAllProducts();
  return products;
};

export {
  createProd,
  getProducts,
};