import styled from "styled-components";

export const input = styled.input`
    width: 80%;
    height: 9%;
    border-radius: 8px;
    outline: none;
    border: black solid 1px;
    padding: 4%;
    background-color: #EFEFEF;

    ::placeholder{
        text-align: start;
    }

    @media (max-width: 468px){
        height: 15%;
    }
`