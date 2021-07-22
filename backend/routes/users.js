import { Router } from 'express';

import userController from '../controller/userController';

import * as multer from "../middlewares/multerMiddleware"

import auth from "../middlewares/auth"

import loginMiddleware from "../middlewares/validateLogin"
import validateUpdate from '../middlewares/validateUpdate';
import validateStore from '../middlewares/validateStore';

const router = Router();

const text = multer.uploadText.any()

router.get('/', userController.index);

router.post('/register', text, validateStore, userController.store);

router.post('/login', text, loginMiddleware, userController.login );

router.put('/update', multer.uploadAvatar.single("file"), auth, validateUpdate, userController.updated);

router.delete("/delete", auth, userController.delete)

export default router
