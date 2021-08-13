import { Router } from 'express';

import * as multer from "../middlewares/multerMiddleware.js"

import auth from "../middlewares/auth.js"
import providerController from '../controller/providerController.js';

import middlewareValidator from "../middlewares/requestOneProvider.js"

const router = Router();

const text = multer.uploadText.any()

router.get('/',  providerController.index);

router.get("/provider_data", auth, middlewareValidator.validate, providerController.getProvider)

export default router
