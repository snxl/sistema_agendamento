import jwt from "jsonwebtoken"
import { promisify } from "util"
import db from "../database/models"


export default async (req, res, next)=>{

    try {

        const checkBearer = req.headers.authorization.indexOf("Bearer")

        if(checkBearer === -1){
    
            const tokenizer = req.headers.authorization
    
            req.headers.authorization = `Bearer ${tokenizer}`
        }

        const authHeader = req.headers.authorization

        if(!authHeader.split(" ")[1]) return res.status(401).json({
            status: "ERR",
            error: "Token not provided"
        })
    
        const token = authHeader.split(" ")[1]
    
        console.log(token)
    

        const decode = await promisify(jwt.verify)(token, process.env.TOKEN_SECRET)

        console.log(decode)

        req.userAuth = decode

        const user = await db.user.findByPk(decode.id)

        if(user) next()
        else throw new Error()
        
    } catch (error) {

        return res.status(401).json({
            status: "ERR",
            error: "Invalid Token"
        })
        
    }
}