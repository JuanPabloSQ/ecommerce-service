import { Router } from 'express';
import AuthController from '../controller/auth.js';

const router = Router();

router.post('/login', AuthController.login);

export default router;
