import mongoose from "mongoose"

export default new class mongo{

    constructor(){

        this.mongo()

    }

    mongo(){



        this.mongoConnection = mongoose.connect(
            "mongodb+srv://nicolas:casemce@cluster.wy6i4.mongodb.net/mce_case?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useFindAndModify: true,
                useUnifiedTopology: false
            }
        )

    }

}