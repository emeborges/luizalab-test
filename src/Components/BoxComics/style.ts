import styled from 'styled-components';

export const Box = styled.div`
  max-width: 300px;
  width: 100%;
  max-width: 10rem;
  margin: 1.5rem 0;
  color: ${props => props.theme.colors.redMarvel};
  text-align: center;

  p {
    margin: 1rem 0 0;
  }
`;
