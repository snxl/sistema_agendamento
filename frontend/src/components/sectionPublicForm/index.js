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
    const [typeEmail] = useState('email')

    const [valuePassword, setPassword] = useState('')
    const [typePassword, setType] = useState('password')

    const [valueTel, setTel] = useState('')
    const [typeTel] = useState('tel')

    const [valueUser, setUser] = useState('')
    const [typeUser] = useState('text')

    const [valueConfirmPassword, setConfirmPassword] = useState('')
    const [typeConfirmPassword] = useState('password')

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

        if(response.data.status === "OK")setterCookie( response.data.token)
        else return spanError()

    }

    function setterCookie ( token ) {

        setCookie( token )

        const checkToken = getterCookie()

        if(checkToken) history.push("/dashboard")
    }

    async function submitRegister(event){

        event.preventDefault()

        const response = await axios.postRegister({
            name: valueUser,
            email: valueEmail, 
            password: valuePassword,
            confirmPassword: valueConfirmPassword,
            phone: valueTel.replace(/\D+/g, '')
        },{
            validateStatus: function (status) {
                return status
            },
        })
        
        if( response.data.status === "OK") setterCookie(response.data.token)
        else setError(response.data.error)
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
                                type={typeEmail}
                                placeContent="Email"
                                color="black"
                                checked={true}
                                margin="30px"
                            />
                        )}

                        {props.login && (
                            <Input
                                value={valuePassword}
                                setValue={setPassword}
                                type={typePassword}
                                setType={setType}
                                placeContent="Senha"
                                showPassword={true}
                                margin="30px"
                            />
                        )}

                        {props.register && (

                            <>
                            
                                <Input
                                    value={valueUser}
                                    setValue={setUser}
                                    type={typeUser}
                                    placeContent="Usuário"
                                    showPassword={false}
                                    required={true}
                                    minlength="4"
                                />

                                <Input
                                    value={valueTel}
                                    setValue={setTel}
                                    type={typeTel}
                                    placeContent="Telefone"
                                    showPassword={false}
                                    required={true}
                                    pattern="\(\d{2}\)\s*\d{5}-\d{4}"
                                />

                                <Input
                                    value={valueEmail}
                                    setValue={setEmail}
                                    type={typeEmail}
                                    placeContent="E-mail"
                                    showPassword={false}
                                    required={true}
                                />

                                <Input
                                    value={valuePassword}
                                    setValue={setPassword}
                                    type={typePassword}
                                    placeContent="Senha"
                                    showPassword={false}
                                    required={true}
                                    minlength="6"
                                />

                                <Input
                                    value={valueConfirmPassword}
                                    setValue={setConfirmPassword}
                                    type={typeConfirmPassword}
                                    placeContent="Confirmar senha"
                                    showPassword={false}
                                    required={true}
                                    minlength="6"
                                />

                            </>
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