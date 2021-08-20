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
                    login={false}
                    logo={false}
                    textBtn="Registrar"
                    register={true}
                    link="/login"
                    contentText="Já tem conta?"
                    contentLink="Login"
                />

            </s.main>
        </>
    )

}