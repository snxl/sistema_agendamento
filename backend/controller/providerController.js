import services from "../services/providerService.js"


export default new class ProviderController{

    async index(req, res){

        const response = await services.index()

        res.json(response)
    }
}