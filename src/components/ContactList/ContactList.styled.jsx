import styled from 'styled-components'

export const ContactsList = styled.ul`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.white};

  width: calc(100vw - 20px);

  box-shadow: ${props => props.theme.shadow.contactsList};
  border-radius: 4px;

  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }

  @media screen and (min-width: 480px) and (max-width: 1200px) {
    max-width: 500px;
  }
`;



export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

  :nth-child(2n + 1) {
    background-color: ${props => props.theme.colors.itemBackgroundColorGrey};
  }

  @media screen and (min-width: 450px) {
    padding: 8px 16px 8px 16px;
  }
`;
export const ContactText = styled.p`
  display: flex;
  align-items: center;
  font-weight: 700;
  min-width: 115px;
  font-size: 14px;

  @media screen and (min-width: 480px) and (max-width: 1199px) {
    font-size: inherit;
    min-width: 120px;
  }
  @media screen and  (min-width: 1200px) {
    font-size: inherit;
    min-width: 240px;
  }
`;

export const ContactButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    min-width: 80px;
    border: 3px solid;
    border-color: ${props => props.theme.colors.accentColor};;
    background-color: ${props => props.theme.colors.accentColor};
    color: ${props => props.theme.colors.white};
    border-radius: 4px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer; ;

    :hover, :focus {
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.text};
    }
`

