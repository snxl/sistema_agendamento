import styled from "styled-components";

export const btn = styled.button`
    width:60%;
    height: 35%;
    background-color:#FEA051;
    border-radius:15px;
    outline:none;
    border: none;
    margin-bottom: 4%;

    :hover{
        filter: brightness(80%);
    }

    :active{
        filter: brightness(60%);
    }
`