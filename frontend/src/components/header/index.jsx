import { useEffect, useState } from "react";
import * as services from "../../services/axios_configs"
import getterToken from "../../utils/getterToken"

import * as s from "./styles"

export default function Header (){

    const [profile, setProfile] = useState('')

    


    useEffect(()=>{
        (async ()=>{

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

            setProfile(user)

        })()
        
    }, [])

    return (
        <>

            <s.section>

                <s.article>

                    <s.divProfile>

                        <s.imgProfile 
                            src={profile.data.description.avatar.url}
                        />

                        <s.divProfileUser>

                            <s.name>
                                {profile.data.description.name}
                            </s.name>

                        </s.divProfileUser>

                    </s.divProfile>

                </s.article>

            </s.section>

        </>
    )

}