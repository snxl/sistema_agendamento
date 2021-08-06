import { Router } from 'express';

import userController from '../controller/userController.js';

import * as multer from "../middlewares/multerMiddleware.js"

import auth from "../middlewares/auth.js"

import loginMiddleware from "../middlewares/validateLogin.js"
import validateUpdate from '../middlewares/validateUpdate.js';
import validateStore from '../middlewares/validateStore.js';

const router = Router();

const text = multer.uploadText.any()

router.get('/', userController.index);

router.post('/register', text, validateStore, userController.store);

router.post('/login', text, loginMiddleware, userController.login );

router.put('/update',  multer.uploadAvatar.single("file"), auth, validateUpdate, userController.updated);

router.delete("/delete", auth, userController.delete)

export default router
