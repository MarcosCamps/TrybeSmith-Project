import getAllOrders from '../models/orderModel';

const getAll = async () => {
  const response = await getAllOrders();
  return response;
};

export default getAll;
