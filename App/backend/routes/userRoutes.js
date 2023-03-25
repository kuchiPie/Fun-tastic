import express from 'express';
import {authUser,registeruser} from '../controllers/userControllers.js';

const router = express.Router();
router.route('/register').post(registeruser);
router.route('/login').post(authUser);

export default router;