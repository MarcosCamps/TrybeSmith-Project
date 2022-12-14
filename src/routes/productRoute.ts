import { Router } from 'express';
import { create, getAll } from '../controllers/productsController';

const router = Router();

router.post('/', create);
router.get('/', getAll);

export default router;
