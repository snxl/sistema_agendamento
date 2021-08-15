import services from "../services/notificationsService.js"

export default new class Notifications {

    async index(req, res){

        const response = await services.index(req.userAuth.id)

        return response.status === "OK"?
                res.status(200).json(response) :
                res.status(400).json(response)
    }

    update(){}
} 