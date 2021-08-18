import { useState } from "react"
import { useHistory } from "react-router-dom"

import * as s from "./styles"
import * as axios from "../../services/axios_configs"
import setCookie from "../../utils/setterCokkie"
import getterCookie from "../../utils/getterCookie"

import Input from "../inputs/index"
import BtnForm from "../buttonForm"
import Redirect from "../redirectPublics"

import Logo from "../../assets/logo.svg"

export default function SectionMainForm (props){

    const history = useHistory()

    const [error, setError] = useState(false)

    const [valueEmail, setEmail] = useState('')
    const [typeUser] = useState('text')
    const [valuePassword, setPassword] = useState('')
    const [typePassword] = useState('password')

    function spanError(){

        arguments.length > 0? 
            setError(arguments[0]):
            setError("Credenciais incorretas. Por favor, verifique-as e tente novamente")

    }

    async function submitLogin(event){

        event.preventDefault()

        if(valueEmail.length === 0 || valuePassword.length === 0) return spanError()

        const response = await axios.postLogin({email: valueEmail, password: valuePassword},{
            validateStatus: function (status) {
                return status
            },
        })

        setterCookie( response.data.token)

    }

    function setterCookie ( token ) {

        setCookie( token )

        const checkToken = getterCookie()

        if(checkToken) history.push("/dashboard")
    }

    async function submitRegister(event){

        event.preventDefault()

    }

    return(
        <s.sectionMain>

            <s.articleMain>

                <s.form onSubmit={async e => props.login? await submitLogin(e) : await submitRegister(e)}>
                    

                    {props.logo && (
                        <s.divLogo>

                            <s.image src={Logo} />
                    
                        </s.divLogo>
                    )}

                    {error && (
                        <s.span>
                            {error}
                        </s.span>
                    )}

                    <s.divInputs>

                        {props.login && (
                            <Input
                                value={valueEmail}
                                setValue={setEmail}
                                type={typeUser}
                                placeContent="Email"
                            />
                        )}

                        {props.login && (
                            <Input
                                value={valuePassword}
                                setValue={setPassword}
                                type={typePassword}
                                placeContent="Senha"
                            />
                        )}

                    </s.divInputs>

                    <s.divBtn>

                        <BtnForm
                            text={props.textBtn}
                        />

                        <Redirect
                            contentText={props.contentText}
                            contentLink={props.contentLink}
                            link={props.link}
                        />

                    </s.divBtn>

                </s.form>

            </s.articleMain>

        </s.sectionMain>
    )

}