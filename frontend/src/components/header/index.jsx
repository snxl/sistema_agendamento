import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import * as services from "../../services/axios_configs"
import getterToken from "../../utils/getterToken"

import defaultImage from "../../assets/profile_user_default.png"

import * as s from "./styles"

export default function Header (){

    const [profileName, setProfileName] = useState(null)
    const [profileImage, setProfileImage] = useState(null)

    useEffect(()=>{

        async function getProfile() {

            const token = getterToken()

            console.log(token)

            const user = await services.getProfile({
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: {
                    pageUser:1,
                    pageProvider:1
                }

            })

            if(user.data.description.avatar) setProfileImage(user.data.description.avatar.url)

            setProfileName(user.data.description.name)
        }

        getProfile()
        
    }, [])

    return (
        <>

            <s.header>
                <s.section>

                    <s.article>

                        <s.divProfile>

                            <s.imgProfile 
                                src={profileImage ?? defaultImage}
                            />

                            <s.divProfileUser>

                                <s.name>
                                    {profileName}
                                </s.name>

                                <Link to="/update">
                                    Meu perfil
                                </Link>

                            </s.divProfileUser>

                        </s.divProfile>

                    </s.article>

                </s.section>
            </s.header>
            
        </>
    )

}