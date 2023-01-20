import styled from 'styled-components'


export const Lable = styled.label`
    display: block;
    text-align: center;
    justify-content: center;
    margin-bottom: 8px;

    font-size: 18px;
    font-weight: 700;
    :focus-within {
        color: ${props => props.theme.colors.accentColor};
    }

        

`
export const Input = styled.input`
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 3px;
    text-align: center;
    border-color: transparent;
    border-radius: 4px;
    outline: none;
    font-size: 16px;
    font-weight: 700;
    :focus {
        border-color: ${props => props.theme.colors.accentColor};
        outline: none;
    }
`