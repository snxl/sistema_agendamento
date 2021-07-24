import { Router } from "express"

const route = Router()

import auth from "../middlewares/auth"
import * as multipart from "../middlewares/multerMiddleware"
import validator from "../middlewares/validateScheduleStore"

import controller from "../controller/scheduleController"

const text = multipart.uploadText.any()

route.post("/scheduling", auth, text, validator, controller.store )

export default route