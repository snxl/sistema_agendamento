import db from "../database/models/index.js"

export default new class scheduleService {

    async store(data){

        try {
            
            const insert = await db.Schedule.create(data)

        } catch (error) {
            
        }
    }

}