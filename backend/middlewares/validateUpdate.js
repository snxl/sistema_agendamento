import * as yup from "yup"
import db from "../database/models/index.js"
import bcrypt from "bcryptjs"

export default async (req, res, next) =>{

    const schema = yup.object().shape({

        name: yup.string(),
        email: yup.string().email(),
        oldPassword: yup.string(),
        password: yup.string()
                .when("oldPassword", {
                    is: value => value.length > 0,
                    then: yup.string().min(6).required()
                }),
        confirmPassword: yup.string()
                .when("password", {
                    is: value => value.length > 0,
                    then: yup.string().required().oneOf([yup.ref("password")])
        })
    })


    if(!(await schema.isValid(req.body)))
        return res.status(400).json({
            status: "ERR",
            error: "Validation fails"
        })

    const { email, oldPassword } = req.body

    const user = await db.user.findByPk(req.userAuth.id)

    if(email === user.email){
        const userExists = await db.user.findOne({ where: { email } })

        if (userExists) return res.status(400).json({
            status:"ERR",
            error: "User already exists"
        })
    }

    if(oldPassword && ! (await bcrypt.compare(oldPassword, user.password)))
        return res.status(401).json({
            status: "ERR",
            error: "Password does not match"
        })

    next()
}