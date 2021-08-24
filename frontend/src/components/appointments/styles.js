import styled from "styled-components"

export const main = styled.main`
    width:100vw;
    height:130vh;
    background-color:#E5E5E5;
`

export const section = styled.section`
    width:100%;
    height: 100%;
`

export const article = styled.article`
    position: absolute;
    top: 58%;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 50%;
    height: 130%;
    background-color:white;
    border-radius: 12px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;

    @media(max-width:1024px) {
        width: 60%;
    }

    @media(max-width:768px) {
        width: 80%;
    }
`
export const divPagination = styled.div`
    width:70%;
    height:10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const divContent = styled.div`
    width:90%;
    height:80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const divHour = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const divConfirm = styled.div`
    width:90%;
    height:10%;
    background-color:orangered;
`
export const listDiv = styled.div`
    position: fixed;
    bottom: 5%;
    right: 5%;
    border-radius: 50%;
    background-color: #FEA051;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 768px){
        display: none;
    }
`

export const imageList = styled.img``

export const image = styled.img`
    max-width: 100%;
`

export const btnPag = styled.button`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: solid 1px black;

    @media(max-width: 468px){
        height: 40px;
        width: 40px;
    }
`

export const day = styled.p`
    width: 80%;
    text-align: center;
    font-size: 1.5rem;
`
export const hour = styled.p``

export const divFullHour = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const pointer = styled.img``

export const divAppointment = styled.div`
    height: 100%;
    width: 70%;
    background-color: ${({appoint}) => appoint? "#FEA051" : ""};
    border-radius: 12px;
`