import styled from 'styled-components';

export const Box = styled.div`
  margin: 2.5rem 2rem 0;
  color: ${props => props.theme.colors.textDarkGrey};

  @media (max-width: 600px) {
    text-align: center;
  }

  .containerReleases {
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 600px) {
      justify-content: center;
    }
  }
`;
