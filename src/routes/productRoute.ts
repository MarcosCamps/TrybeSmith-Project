import { Router } from 'express';
import create from '../controllers/productsController';

const router = Router();

router.post('/', create);

export default router;
