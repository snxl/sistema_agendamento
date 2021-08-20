import styled, { css } from "styled-components";

export const input = styled.input`
    width: 80%;
    height: 100%;
    border-radius: 8px;
    outline: none;
    border: black solid 1px;
    padding: 3%;
    padding-left:10% ;
    padding-right:10%;
    background-color: #EFEFEF;    

    ::placeholder{
        text-align: start;
    }

    @media (max-width: 468px){
        height: 100%;
    }

    ${props => props.className === "black" && css`
        background-color:#402E46 !important;
        color: white !important;
    `}

`

export const div = styled.div`
    position: relative;
    display: flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    margin: ${({marginDiv}) => (marginDiv? "30px" : "10px")};
`

export const img = styled.img`
    position: absolute;
    width: 4%;
    right: 15%;

    display :${({displayInp}) => (displayInp? "none":"block")};
`