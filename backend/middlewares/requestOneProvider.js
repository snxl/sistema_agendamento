import db from "../database/models/index.js"
import { parseISO } from "date-fns"

export default new class{
    
    constructor(){}

    async validate(req, res, next){

        const checkProvider = await db.user.findOne({
            where: {
                id: req.userAuth.id,
                provider:true
            }
        })

        if(checkProvider.provider === false) return res.status(401).json({
            status:"ERR",
            error: "user is not provider"
        })

        if(!req.query.date) return res.status(401).json({
            status:"ERR",
            error: "date is required"
        })

        const { date } = req.query

        req.parsedDate = parseISO(date)

        next()

    }
}