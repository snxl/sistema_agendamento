import { Router } from 'express';

import providerController from '../controller/providerController';

import * as multer from "../middlewares/multerMiddleware"

import auth from "../middlewares/auth"
import providerController from '../controller/providerController';

const router = Router();

const text = multer.uploadText.any()

router.get('/',  providerController.index);

export default router
