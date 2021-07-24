import db from "../database/models"

export default new class ProviderService{

    async index(){

        try {

            return await db.user.findAll({
                where:{
                    provider: true
                },
                attributes:[ "id", "name", "email", "avatar_id"],
                include:[{
                    model:db.File,
                    as:"avatar",
                    required:false,
                    attributes: ["name", "path", "url"]
                },{
                    model: db.Schedule,
                    as: "hours",
                    required: false
                }]
            })

        } catch (error) {

            console.log(error)
            return error
        }


    }
}