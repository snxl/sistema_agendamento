import services from "../services/scheduleService"


export default new class ScheduleController{

    async store(req, res){

        const { date, hour, provider, user } = req.scheduling

        const create = await services.store({})

        res.json(req.scheduling)
    }
}