import styled from "styled-components";

export const btn = styled.button`
    width:50%;
    height: 40%;
    background-color:#FEA051;
    border-radius:15px;
    outline:none;
    border: none;
    margin-bottom: 4%;
    font-size:1.3rem;

    :hover{
        filter: brightness(80%);
    }

    :active{
        filter: brightness(60%);
    }
`