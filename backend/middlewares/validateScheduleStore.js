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
                error: "Validation fails"
            })
    
        const validateProvider = await db.user.findByPk(req.body.provider_id)

        if(validateProvider.id === req.userAuth.id || validateProvider.provider === false)
            return res.status(403).json({
                status:"ERR",
                error: "provider does not valid"
            })
    
        const data = req.body.appointment.split(" ")
        const hours = data[1].split(":")
        const fullDate = req.body.appointment + ":00"

        if(await db.user.findOne({
            where:{
                id:req.body.provider_id
            },
            include:[{
                model:db.Schedule,
                as:"hours",
                where:{
                    date: req.body.appointment
                }
            }]
        }))  return res.json({
            status:"ERR",
            error:"date exists"
        })

        if(Number(hours[0]) < 8 || Number(hours[0]) > 16) return res.json({
            status:"ERR",
            error: "minimum time 8:00 and maximum time 16:00. Minutes can only be marked if they are 00"
        })

        if( 
            Number(data[0].split("-")[0]) < moment().format().split("T")[0].split("-")[0]
        ){
            return res.json({
                status:"ERR",
                error:"year must be greater than or equal to the present date"
            })
        }

        if( 
            Number(data[0].split("-")[0]) == moment().format().split("T")[0].split("-")[0] &&
            Number(data[0].split("-")[1]) < moment().format().split("T")[0].split("-")[1]
        ){
            return res.json({
                status:"ERR",
                error:"teste"
            })
        }

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