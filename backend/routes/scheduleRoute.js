import { Router } from "express"

const route = Router()

import auth from "../middlewares/auth.js"
import * as multipart from "../middlewares/multerMiddleware.js"
import validator from "../middlewares/validateScheduleStore.js"

import controller from "../controller/scheduleController.js"

const text = multipart.uploadText.any()

route.post("/scheduling", auth, text, validator, controller.store )

export default route