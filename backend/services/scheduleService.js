import db from "../database/models/index.js"

export default new class scheduleService {

    async store(data){

        try {
            
            return {
                status:"OK",
                describe:  await db.Schedule.create(data)
            }

        } catch (error) {
            
            return error
            
        }
    }

}