import services from "../services/providerService"


export default new class ProviderController{

    async index(req, res){

        const response = await services.index()

        res.json(response)
    }
}