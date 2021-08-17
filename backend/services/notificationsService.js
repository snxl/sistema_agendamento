import Notification from "../schemas/Notification"

export default new class{

    async index(id){

        try {
         
            return {
                status:"OK",
                description: await Notification.find({
                    // user: id
                })
                    // .sort({createdAt: "desc"})
                    // .limit(20)
            }

        } catch (error) {

            console.log(error)

            return {
                status:"ERR",
                description: "failed to fetch data",
                error
            }

        }

    }

    async update(){



    }
}