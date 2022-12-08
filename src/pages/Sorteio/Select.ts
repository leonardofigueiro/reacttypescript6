import styled from "styled-components";

const Select = styled.select`
    
    border-radius: 45px;
    box-shadow: 0px 2px 0px 1px #000000;
    border: 2px solid black;
    box-sizing: border-box;
    font-size: 20px;
    height: 82px;
    padding: 0 32px;
    width: 70%;
    &:focus{
    outline: none;
    }
    @media screen and (max-width: 800px) {
        width: 100%;
    }
`
export default Select