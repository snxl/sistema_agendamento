import db from "../database/models/index.js"

export default new class scheduleService {

    async store(data){

        try {

            console.log(data)
            
            return {
                status:"OK",
                describe:  await db.Schedule.create(data)
            }

        } catch (err) {
            
            return {
                status: "ERR",
                error:"failed to schedule",
                description: err
            }
            
        }
    }

}