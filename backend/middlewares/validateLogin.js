import * as yup from "yup"
import db from "../database/models"
import bcrypt from "bcryptjs"

export default async (req, res, next)=>{

    const schema = yup.object().shape({
        email: yup.string().required("email is required"),
        password: yup.string().required("password is required")
    })

    if(!(await schema.isValid(req.body)))
        return res.status(400).json({
            status:"ERR",
            error:"Validation Fails"
        })

    const {email, password} = req.body

    const user = await db.user.findOne({where: { email }})

    if(!user) return res.status(401).json({
        status:"ERR",
        error:"user not found"
    })

    if(!(await bcrypt.compare(password, user.password)))
        return res.status(401).json({
            status:"ERR",
            error:"Password does not match!"
        })

    const {id, name, provider} = user
    
    req.user = {id, name, email, provider}

    next()

}