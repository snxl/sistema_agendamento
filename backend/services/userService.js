import db from "../database/models/"
import { Sequelize, sequelize } from "../database/models/"
import jwt from "jsonwebtoken"

const Op = Sequelize.Op

export default new class UserService{

    async index(){

        try{
            const data = await db.user.findAll({
                where:{
                    provider: false
                },
                include:[{
                    model: db.File,
                    as: "avatar",
                    required: false
                },{
                    model: db.Schedule,
                    as: "hours",
                    required:false
                }]
            })

            return{
                status:"OK",
                description: data
            }

        }catch(err){
            return{
                status:"ERR",
                error: "Falha ao buscar dados",
                description: err
            }
        }

    }

    async store(dataBody){

        try {

            const data = await db.user.create(dataBody)

            const token = await jwt.sign({
                id: data.id, 
                name: data.name, 
                email: data.email, 
                provider: data.provider
            }, process.env.TOKEN_SECRET,{
                expiresIn: "7d"
            }
            )

            return {
                status:"OK",
                token: token
            }

        } catch (error) {
            
            return {
                status: "ERR",
                error: "falha ao cadastrar dados"
            }
        }

    }

    async login (data){

        try {
            
            const token = await jwt.sign({
                id: data.id, 
                name: data.name, 
                email: data.email, 
                provider: data.provider
            }, process.env.TOKEN_SECRET,{
                expiresIn: "7d"
            }
            )

            return {
                status: "OK",
                token
            }

        } catch (error) {

            return {
                status: "ERR",
                error: "Falha ao fazer login"
            }
            
        }
    }

    async update(data, file, unique){

        const t = await sequelize.transaction()

        try {

            let checkAvatar

            let idFile = {
                id: undefined
            }

            if(file){

                checkAvatar = await db.user.findOne({
                    where:{
                        [Op.or] : [{
                            id: unique.id
                        },{
                            email: unique.email
                        }]
                    },
                    include:[{
                        model:db.File,
                        as:"avatar",
                        required:true,
                    }]
                })


                if(checkAvatar){

                    const { id, name, path, url } = await db.File.update({
                        name: file.originalname,
                        path: file.filename
                    } ,{
                        where: {
                            id: checkAvatar.avatar.id
                        }
                    })

                    idFile = {
                        id
                    }
                }else{

                    const { id, name, path, url } = await db.File.create({
                        name: file.originalname,
                        path: file.filename
                    })

                    idFile = {
                        id
                    }

                }

            }

            const { id, name, email, provider } = await db.user.update({...data, avatar_id: idFile.id}, {
                where:{
                    [Op.or]:[{
                        id: unique.id
                    },{
                        email: unique.email
                    }]
                },
                transaction: t
            })
            
            await t.commit();

            const token = await jwt.sign({
                id,
                name, 
                email, 
                provider,
            }, process.env.TOKEN_SECRET,{
                expiresIn: "7d"
            })

            return {
                status: "OK",
                token
            }

        } catch (error) {

            console.log(error)

            await t.rollback();
            
            return { 
                status: "ERR",
                error: "Falha ao atualizar dados",
                description: error
            }
        }
    }

    async delete(unique){

        try{

            const user =  await db.user.findOne({
                where:{
                    [Op.or]:[{
                        id:unique.id
                    },{
                        email:unique.email
                    }]
                },
                include:{
                    model: db.File,
                    as: "avatar"
                }
            })

            if(user.avatar){

                await db.File.destroy({
                    where:{
                        id: user.id
                    }
                })
            }

            const deleted = await db.user.destroy({
                where:{
                    [Op.or]:[{
                        id: unique.id
                    },{
                        email: unique.email
                    }]
                }
            })

            return {
                status: "OK",
                description: "deletado com sucesso",
                affectRows: deleted
            }

        }catch(err){
            return {
                status: "OK",
                error:"Falha ao deletar dados",
                description: err,

            }
        }
    }
}