import db from "../database/models/index.js"
import { Sequelize } from "../database/models/index"
import { startOfDay, endOfDay } from "date-fns"

const Op = Sequelize.Op

export default new class ProviderService{

    async index(){

        try {

            const index = await db.user.findAll({
                where:{
                    provider: true
                },
                attributes:[ "id", "name", "email", "avatar_id", "provider"],
                include:[{
                    model:db.File,
                    as:"avatar",
                    required:false,
                    attributes: ["name", "path", "url"]
                },{
                    model: db.Schedule,
                    as: "hours",
                    required: false
                },{
                    model: db.Schedule,
                    as:"hours",
                    required:false
                }]
            })

            return {
                status: "OK",
                providers: index
            }

        } catch (error) {

            console.log(error)
            return error
        }


    }

    async oneProvider( parsedDate, id ){

        try {

            return {
                status:"OK",
                description: await db.Schedule.findAll({
                    where:{
                        provider_id: id,
                        canceled_at: null,
                        date:{
                            [Op.between]:[startOfDay(parsedDate), endOfDay(parsedDate)]
                        }
                    },
                    include:[
                        {
                            model: db.user,
                            as:"provider"
                        },
                        {
                            model: db.user,
                            as:"user"
                        }
                    ],
                    order:["date"]
                })
            }
            
        } catch (error) {
            
            return{
                status:"ERR",
                error
            }

        }

    }

}