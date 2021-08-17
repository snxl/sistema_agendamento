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
    height: 85vh;
    width: 40vw;
    
    @media(max-width: 1279px){
        height: 85vh;
        width: 40vw;
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
    justify-content: space-around;
`

export const divLogo = styled.div`
    margin-top: 4%;
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
`

export const divInputs = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
`

export const image = styled.img`

`

export const divBtn = styled.div`
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
`