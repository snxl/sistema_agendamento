import multer from "multer";
import * as multerConfig from "../config/multerConfig.js";

export const uploadAvatar = multer({storage: multerConfig.storage})

export const uploadText = multer({storage: null})