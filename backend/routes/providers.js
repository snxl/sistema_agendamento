import { Router } from 'express';

import * as multer from "../middlewares/multerMiddleware.js"

import auth from "../middlewares/auth.js"
import providerController from '../controller/providerController.js';

const router = Router();

const text = multer.uploadText.any()

router.get('/',  providerController.index);

export default router
