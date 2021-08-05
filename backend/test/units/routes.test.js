import classApp from "../../app"
import request from "supertest"
import crypto from 'crypto';
import { join } from "path"
import deleted from "../functions/deleteRegisterDataBase"
import create from "../functions/createNewRegisterDataBase";

const app = classApp.app

const objectUser = {
    name: `Jest`,
    email: `${crypto.randomBytes(4).toString('hex')}@email.com`,
    password: `jestTest`,
}

const objectUser2 = {
    name: `Jest`,
    email: `${crypto.randomBytes(4).toString('hex')}@email.com`,
    password: `jestTest`,
}

describe("Teste Routes", ()=>{

    jest.setTimeout(10000)

    it("request all users", done =>{

        request(app).get("/users").then(response =>{

            const jsonToObject = JSON.parse(response.text)

            expect(jsonToObject.status === "OK").toBeTruthy()

            done()

        }).catch(e => done(e))


    })

    it("request all providers", done =>{

        request(app)
            .get("/providers")
            .expect(200)
            .end( ( err, response ) => {

                if(err) return done(err)

                expect(response.body.status).toBe("OK")

                done()
            })

    })

    test("register user", done => {
        request(app)
            .post("/users/register")
            .send(objectUser)
            .expect(200)
            .end((err, resp) => {
                if (err) {
                   return done(err)
                }
                const jsonToObject = JSON.parse(resp.text)
                expect(jsonToObject.status).toBe("OK")
                done()
            })
    })


    it("login user", done =>{

        request(app)
            .post("/users/login")
            .send({
                email: objectUser.email,
                password: objectUser.password
            })
            .expect(200)
            .end( ( err, response) => {
                if (err) {
                    return done(err)
                 }
                 
                const jsonToObject = JSON.parse(response.text)
                
                expect(jsonToObject.status).toBe("OK")
                
                done()
            })

    })

    it("update user", done => {

        request(app)
        .post("/users/login")
        .send({
            email: objectUser.email,
            password: objectUser.password
        })
        .expect(200)
        .end( ( err, response) => {
            if (err) {
                return done(err)
             }
             
            const jsonToObject = JSON.parse(response.text)

            expect(jsonToObject.status).toBe("OK")

            
            expect(1).toBe(1)


            const token = jsonToObject.token

            const file = join(__dirname, "../assets/Sem título.png")
            
            request(app)
                .put("/users/update")
                .set('Authorization', `Bearer ${token}`)
                .set("Content-Type", "multipart/form-data")
                .field("name", objectUser2.name )
                .field("email", objectUser2.email )
                .field("password", objectUser2.password )
                .field("confirmPassword", objectUser2.password )
                .field("oldPassword", objectUser.password)
                .attach("file", file)
                .expect(200)
                .end( ( error, responseUpdate ) => {
                    if( error ){
                        return done(err)
                    }

                    expect(responseUpdate.body.status).toBe("OK")
                    expect(responseUpdate.body.token).toBeDefined()

                    done()
                })

            
        })
    })

    it("register appointment", done => {

        create({
            name: objectUser.name,
            email: objectUser.email,
            password_h: objectUser.password,
            provider: true
        }, "user").then( provider => {

            expect(provider.status).toBe("OK")
            expect(provider.register).toBeDefined()
            expect(typeof provider.register.id).toBe("number")
            expect(typeof provider.register.provider).toBe("boolean")

            const {
                id,
                email
            } = provider.register

            request(app)
            .post("/users/login")
            .send({
                email: objectUser2.email,
                password: objectUser2.password
            })
            .expect(200)
            .end( ( err, response) => {
                if (err) {
                    return done(err)
                 }
                
                expect(response.body.status).toBe("OK")
                expect(response.body.token).toBeDefined()

                const token = response.body.token

                request(app)
                    .post("/schedule/scheduling")
                    .set('Authorization', `Bearer ${token}`)
                    .send({
                        provider_id: id,
                        appointment: "2021-10-21 08:30"
                    })
                    .end( ( error, responseSchedule ) => {

                        if(error) return done(error)

                        expect(responseSchedule.body.status).toBe("OK")

                        deleted(id, "user").then( deleteprovider => {

                            console.log(deleteprovider)

                            expect(deleteprovider.status).toBe("OK")

                            done()
                        }).catch( e => done(e))

                    })

            })

        })
    })

    it("delete user", done => {

        request(app)
        .post("/users/login")
        .send({
            email: objectUser2.email,
            password: objectUser2.password
        })
        .expect(200)
        .end( ( err, response) => {
            if (err) {
                return done(err)
             }

            expect(response.body.status).toBe("OK")
             
            const token = response.body.token

            request(app)
                .delete("/users/delete")
                .set('Authorization', `Bearer ${token}`)
                .expect(200)
                .end( (error, responseDelete ) => {

                    if(error) return done(error)

                    expect(responseDelete.body.status).toBe("OK")
                    expect(responseDelete.body.description).toBe("deletado com sucesso")
                    expect(responseDelete.body.affectRows).toBe(1)

                    done()

                })
            

        })

    })

})