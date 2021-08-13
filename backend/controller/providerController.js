import services from "../services/providerService.js"


export default new class ProviderController{

    async index(req, res){

        const response = await services.index()

        res.json(response)
    }

    async getProvider(req, res){

        const { parsedDate } = req

        const { id } = req.userAuth

        const response = await services.oneProvider(parsedDate, id)

        res.json(response)

    }
}