import jwt from "jsonwebtoken"
import { promisify } from "util"


export default async (req, res, next)=>{

    const authHeader = req.headers.authorization

    if(!authHeader) return res.status(401).json({
        status: "ERR",
        error: "Token not provided"
    })

    const token = authHeader.split(" ")[1]

    try {
        const decode = await promisify(jwt.verify)(token, process.env.TOKEN_SECRET)

        req.userAuth = decode
        next()
    } catch (error) {

        return res.status(401).json({
            status: "ERR",
            error: "Invalid Token"
        })
        
    }
}