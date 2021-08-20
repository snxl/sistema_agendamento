import styled from "styled-components"

export const sectionMain = styled.section`
    position: absolute;
    margin: auto;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const articleMain = styled.article`
    background-color: white;
    border-radius: 3px;
    box-shadow: 0px 0px 50px black;
    height: 90vh;
    width: 40vw;
    
    @media(max-width: 1279px){
        height: 85vh;
        width: 60vw;
    }

    @media(max-width:768px){
        height: 80vh;
        width: 80vw;
    }

    @media(max-width:480px){
        height: 100vh;
        width: 100vw;
    }
`

export const form = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const divLogo = styled.div`
    margin-top: 4%;
    margin-bottom: 5%;
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
`

export const divInputs = styled.div`
    width: 100%;
    min-height: 40%;
    display: flex;
    flex-direction:column;
    align-items: center;
    margin-top: 3%;

    @media(max-width:768px){
        margin-top: 2%;
    }

    @media(max-width:468px){
        margin-top: 15%;
    }
`

export const image = styled.img`

`

export const divBtn = styled.div`
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
`
export const span = styled.span`
    margin-top: 2%;
    background-color:#F52758;
    font-size: 1rem;
    width: 80%;
    min-height: 7%;
    border-radius:4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
`