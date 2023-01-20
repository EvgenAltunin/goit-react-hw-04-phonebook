import styled from 'styled-components'

export const ContactEditor = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 14px;
  padding: 16px;
  width: 260px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 18px;

  @media screen and (min-width: 450px) {
    width: 300px;
  }
`;

export const Lable = styled.label`
    font-weight: 700;
    width: 100%;
    :focus-within {
        color: ${props => props.theme.colors.accentColor};
    }
    &:not(:last-child) {
        margin-bottom: 8px;
    };
`
export const Input = styled.input`
    display: inline-flex;
    width: calc(100% - 10px);
    padding: 3px;
    text-align: center;
    border-color: transparent;
    border-radius: 4px;
    outline: none;
    font-size: 16px;
    font-weight: 700;
    :focus {
        border-color: ${props => props.theme.colors.accentColor};
    };
        outline: none;
`

export const Submit = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    min-width: 80px;
    border: 3px solid;
    border-color: ${props => props.theme.colors.accentColor};
    background-color: ${props => props.theme.colors.accentColor};
    color: ${props => props.theme.colors.white};
    border-radius: 4px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer; ;

    :hover, 
    :focus {
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.text};  
    }
`