import styled from 'styled-components';

export const Box = styled.div`
  margin: 2.5rem 2rem 0;
  color: ${props => props.theme.colors.textDarkGrey};

  .containerReleases {
    display: flex;
    flex-wrap: wrap;
  }
`;
