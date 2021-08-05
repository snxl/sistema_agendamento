import db from "../../database/models"

export default async function create (data, dataBase) {

    try {
        
        return {
            status: "OK",
            register: await db[dataBase].create(data)
        }

    } catch (error) {
        
        return {
            status: "ERR",
            describe: error
        }

    }

}