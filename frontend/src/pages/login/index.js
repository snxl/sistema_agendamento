import React from "react"

import * as s from "./styles"

import SectionMainForm from "../../components/sectionPublicForm"

import background from "../../assets/background.svg"

export default function Register (props){

    return(
        <>
            <s.main>

                <s.background src={background} />

                <SectionMainForm
                    login={true}
                    logo={true}
                    textBtn="Login"
                    register={false}
                    link="/register"
                    contentText="Não tem conta?"
                    contentLink="Registrar"
                />

            </s.main>
        </>
    )

}