import styled from 'styled-components';

export const Box = styled.div`
  max-width: 300px;
  width: 100%;
  margin: 1.5rem 0;

  .imageBox {
    cursor: pointer;
  }

  .heroDetails {
    margin: 1rem 0 0;
    display: flex;
    justify-content: space-between;
    font-weight: 700;

    p {
      color: ${props => props.theme.colors.textDarkGrey};
      cursor: pointer;
    }
    .icons {
      color: ${props => props.theme.colors.textRed};
      cursor: pointer;
    }
  }
`;
