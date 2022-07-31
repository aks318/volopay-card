import styled from "styled-components";

export const StyleButton = styled.button`
    border: 1px solid grey;
    background-color: ${(props) => props.variant === "outline" ? "white" : "red" };
    color: white;
    border-radius: 2px;
    font-size: 14px;
    padding: 2px 4px;
    width: 200px;
    &:hover{
        background-color: ${(props) => props.variant !== "outline" ? "white" : "red" };
        color: blue;
    }
`

export const FancyButton = styled(StyleButton)`
    background-color: green;
    border: none;
    display: block;
`

export const SubmitButton = styled(StyleButton).attrs( (props) =>({   //we can pass only object also
    type: 'submit',
}))`
    box-shadow: 0 9px #999;
    &:active{
        background-color: ${(props) => props.variant === "outline" ? "white" : "red"};
        box-shadow: 0 5px #666;
        transform: translate(4px);
    }
`