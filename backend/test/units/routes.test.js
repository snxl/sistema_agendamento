const classApp = require("../../app")
const request = require("supertest")

const app = classApp.app

describe("Teste de rotas", ()=>{

    it("request all users", done =>{

        const response = request(app).get("/users")

        expect(response).toBeDefined()

    })

})