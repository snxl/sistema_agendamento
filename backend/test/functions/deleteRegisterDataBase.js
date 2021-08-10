import db from "../../database/models"

export default async function deleted (id, dataBase) {

    try {
        
        return {
            status: "OK",
            register: await db[dataBase].destroy({
                where: {
                    id
                },
                hooks:true
            })
        }

    } catch (error) {

        console.log(error)
        
        return {
            status: "ERR",
            describe: error
        }

    }

}