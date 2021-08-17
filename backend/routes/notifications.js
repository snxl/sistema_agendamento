import { Router } from 'express';

import * as multer from "../middlewares/multerMiddleware.js"

import auth from "../middlewares/auth.js"
import validator from "../middlewares/notificationMiddlewareValidator.js"
import notificationMiddlewareValidator from '../middlewares/notificationMiddlewareValidator.js';
import controller from "../controller/notificationController.js"

const router = Router();

const text = multer.uploadText.any()

router.get("/", auth, notificationMiddlewareValidator, controller.index)
router.put("/", auth, controller.update)


export default router
