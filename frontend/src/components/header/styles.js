import styled from "styled-components";

export const header = styled.header`
    width:100vw;
    height: 12vh;
`

export const section = styled.section`
    width:100%;
    height: 100%;
`

export const article = styled.article`
    width:100%;
    height: 100%;
    background-color:#E5E5E5;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const divProfile = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    width:15%;
    height:90%;
    margin-right: 2%;

    @media(max-width:1024px){
        width:20%;
    }
`

export const imgProfile = styled.img`
    max-width:40%;
    height:90%;
    border-radius:12px;
    margin-right: 2px;

    @media(max-width:768px){
        max-width:90%
    }
`
export const divProfileUser = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width:768px){
        display: none;
    }
`

export const name = styled.p``

export const link = styled.a``

export const divLink = styled.div``