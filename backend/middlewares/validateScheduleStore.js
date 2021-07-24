import * as yup from "yup"
import moment from "moment"

export default async (req, res, next)=>{

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

    const data = req.body.appointment.split(" ")

    const arrayDate = data[0].split("-")

    const arrayHours = data[1].split(":")

    const dateCompleteNow = moment().format("YYYY-MM-DD").split("-")

    const hoursCompleteNow = moment().format("HH:mm:ss").split(":")

    let errors = []

    arrayDate

    return res.json({date: dateCompleteNow, hours: hoursCompleteNow})

    req.scheduling = {
        date: arrayDate,
        hour: arrayHours,
        provider: req.body.provider_id,
        user: String(req.body.user_id)
    }

    next()
}