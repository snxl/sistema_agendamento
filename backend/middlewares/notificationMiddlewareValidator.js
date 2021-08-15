import db from "../database/models/index.js"

export default async (req, res, next) => {

    const checkIsProvider = await db.user.findOne({
        where:{
            id: req.userAuth.id,
            provider: true
        }
    }) 

    if(!checkIsProvider) return res.status(401).json({
        status:"ERR",
        error:"Only providers can load notifications"
    })


    next()

}