import services from "../services/scheduleService.js"


export default new class ScheduleController{

    async store(req, res){

        const { fullDate, date } = req.scheduling

        const { provider_id } = req.body

        const { id } = req.userAuth

        const create = await services.store({date: fullDate, provider_id, user_id: id })

        res.json(create)
    }
}