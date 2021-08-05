import * as yup from "yup"
import db from "../database/models"
import moment from "moment"

export default async (req, res, next)=>{

    try {
        
        req.body.user_id = req.userAuth.id

        const schema = yup.object().shape({
            appointment: yup.date().required(),
            provider_id: yup.number().integer().required(),
            user_id: yup.number().integer().required()
        })
    
        if(!(await schema.isValid(req.body)) || req.body.provider_id === req.body.user_id)
            return res.status(400).json({
                status: "ERR",
                error: "Validation"
            })
    
        const validateProvider = await db.user.findByPk(req.body.provider_id)

        if(validateProvider.id === req.userAuth.id || validateProvider.provider === false)
            return res.status(403).json({
                status:"ERR",
                error: "provider does not valid"
            })
    
        const data = req.body.appointment.split(" ")
        const fullDate = req.body.appointment + ":00"
    
        req.scheduling = {
            fullDate,
            date: data
        }
    
        next()

    } catch (err) {

        console.log(err)
        
        res.status(403).json({
            status: "ERR",
            error: "Validation fails"
        })

    }
}