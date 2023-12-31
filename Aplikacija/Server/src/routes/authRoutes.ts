import express from 'express';
import * as authController from '../controllers/authController';
import { loginLimiter } from '../middleware/loginLimiter';
const router = express.Router();
router.route('/login/user').post(loginLimiter, authController.loginUser);
router.route('/login/shop').post(loginLimiter, authController.loginShop);
router.route('/register/user').post(authController.registerUser);
router.route('/register/shop').post(authController.registerShop);
router.route('/refresh').get(authController.refresh);
router.route('/logout').post(authController.logout);
router.route('/photo').post(authController.getProfileImage);
export default router;
