import multer from "multer"
import crypto from "crypto"
import { resolve, extname } from "path"

export const storage = multer.diskStorage({
    destination: resolve(__dirname, "..", "public", "uploads"),
    filename:(req,file,cb)=>{
        crypto.randomBytes(16, (err, value)=>{
            if(err) cb(err)
            return cb(null, value.toString('hex') + extname(file.originalname))
        })
    }
})