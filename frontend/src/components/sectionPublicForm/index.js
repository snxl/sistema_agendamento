import { useState } from "react"

import * as s from "./styles"

import Input from "../inputs/index"
import BtnForm from "../buttonForm"
import Redirect from "../redirectPublics"

import Logo from "../../assets/logo.svg"


export default function SectionMainForm (props){

    const [valueUser, setUser] = useState('')
    const [typeUser] = useState('text')
    const [valuePassword, setPassword] = useState('')
    const [typePassword] = useState('password')

    return(
        <s.sectionMain>

            <s.articleMain>

                <s.form>

                    {props.logo && (
                        <s.divLogo>

                            <s.image src={Logo} />
                    
                        </s.divLogo>
                    )}

                    <s.divInputs>

                        {props.login && (
                            <Input
                                value={valueUser}
                                setValue={setUser}
                                type={typeUser}
                                placeContent="Usuário"
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