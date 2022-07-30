import { Router } from 'express';
import creatingLogin from '../controllers/userController';

const router = Router();

router.post('/', creatingLogin);

export default router;