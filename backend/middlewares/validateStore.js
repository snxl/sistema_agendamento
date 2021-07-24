import * as yup from "yup"
import db from "../database/models/index.js"

export default async (req, res, next)=>{

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required().min(6)
    })

    if(!(await schema.isValid(req.body)))
        return res.status(400).json({
            status: "ERR",
            error: "Validation"
        })

    const verify = await db.user.findOne({
        where: {
            email: req.body.email
        }
    })

    if(await verify)
        return  res.status(401).json({
            status: "ERR",
            error: "user exists"
        })

    next()
}