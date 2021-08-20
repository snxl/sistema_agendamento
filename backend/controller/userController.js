import db from "../database/models/index.js"
import userService from "../services/userService.js"

export default new class UserController{

    async index(req, res){

        const responseService = await userService.index()

        if(responseService.status !== "ERR") return res.status(200).json(responseService)
        else return res.status(400).json(responseService)
    }

    async store( req, res ){
        
        // return res.json("passei pela validação")

        const {name, email, password, phone} = req.body

        console.log(phone)

        const responseService = await userService.store({name, email, password_h: password, phone})

        if(responseService.status !== "ERR") return res.status(200).json(responseService)
        else return res.status(400).json(responseService)
    }

    async updated( req, res, next ){

        const {name, email, password} = req.body
        
        const userTokenData = req.userAuth

        const file = req.file || undefined

        const objectForUpdated = {name, email, password_h: password}


        for(const updated in objectForUpdated){

            if(!objectForUpdated[updated]) objectForUpdated[updated] = undefined

        }


        const responseService = await userService.update(objectForUpdated, file, userTokenData)

        if(responseService.status !== "ERR") return res.status(200).json(responseService)
        else return res.status(400).json(responseService)
    }
    
    async login( req, res, next ){
        
        const { id, name, email, provider } = req.user

        const responseService = await userService.login({id, name, email, provider})

        responseService.status === "OK" && (
            res.status(200).json(responseService)
        )
        responseService.status === "ERR" && (
            res.status(400).json(responseService)
        )

    }

    async delete(req, res){

        const { id, email } = req.userAuth

        const services = await userService.delete({id, email})

        if(services.status !== "ERR") return res.status(200).json(services)
        else return res.status(400).json(responseService)
    }

    async provider(req, res){

        const service = await userService.toProvider(req.userAuth)

        return service.status == "OK"?
                res.status(200).json(service):
                res.status(400).json(service)
    }

    async findOne(req, res){

        const { pageUser, pageProvider } = req.query

        const service = await userService.findOneUser(req.userAuth, Number(pageUser), Number(pageProvider))

        return service.status == "OK"?
                res.status(200).json(service):
                res.status(400).json(service)

    }
}