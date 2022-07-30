import { Router } from 'express';
import gettingOrders from '../controllers/orderController';

const router = Router();

router.get('/', gettingOrders);

export default router;