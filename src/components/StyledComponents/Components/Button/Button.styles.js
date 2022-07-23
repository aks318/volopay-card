import styled from "styled-components";

export const StyleButton = styled.button`
    border: 1px solid grey;
    background-color: ${(props) => props.variant === "outline" ? "white" : "red" };
    border-radius: 2px;
    font-size: 14px;
    padding: 2px 4px;
    width: 200px;
`