import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.backgroundSec};

  .header {
    padding: 3.125rem 0;
    display: flex;
    align-items: center;

    @media (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
    }

    .logoContainer {
      display: flex;
      color: ${props => props.theme.colors.text};
      font-weight: 700;
      align-items: center;
      cursor: pointer;
      font-size: 0.8rem;

      .logoComent {
        margin: 0 0 0 1rem;
        font-size: 16px;
      }
    }

    .inputContainer {
      position: relative;
      width: 100%;
      max-width: 500px;
      margin: 0 6.25rem;

      @media (max-width: 900px) {
        margin: 1rem 0;
      }

      .icon {
        position: absolute;
        top: 0px;
        left: 20px;
        z-index: 10;
        border: none;
        background: transparent;
        outline: none;
        font-size: 2rem;
        color: ${props => props.theme.colors.redMarvel};
      }

      input {
        border: none;
        width: 100%;
        background: ${props => props.theme.colors.backgroundBase};
        padding: 0.6rem 3rem;
        font-size: 1rem;
        border-radius: 35px;
        color: ${props => props.theme.colors.textSecundary};
        transition: all 0.3s;

        &:focus {
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
          outline: 0;
          border-radius: 8px 8px 0 0;
        }
      }

      .searchResults {
        position: absolute;
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
        z-index: 9;
        transition: all 0.3s;
        border-radius: 0 0 8px 8px;
        top: 2;
        width: 100%;
        height: 20rem;
        background: ${props => props.theme.colors.backgroundBase};
        overflow-y: scroll;
        scrollbar-width: auto;
        scrollbar-color: #8f54a0 #ffffff;

        ::-webkit-scrollbar-thumb {
          background-color: ${props => props.theme.colors.textGrey};
          border-radius: 10px;
          border: 3px solid #ffffff;
        }
        ::-webkit-scrollbar-track {
          background: #ffffff;
        }
        ::-webkit-scrollbar {
          width: 16px;
        }

        p {
          text-align: center;
          color: ${props => props.theme.colors.textDarkGrey};
        }
        .results {
          font-size: 0.8rem;
          cursor: pointer;

          p {
            padding: 1rem 0;

            :nth-child(odd) {
              background: ${props => props.theme.colors.backgroundSec};
            }

            &:hover {
              font-weight: 700;
            }
          }
        }
      }
    }
  }

  .details {
    margin: 0 2rem;
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.colors.textDarkGrey};

    @media (max-width: 600px) {
      flex-direction: column;
    }

    .heroDetail {
      display: flex;
      width: 30%;
      justify-content: center;
      flex-direction: column;

      @media (max-width: 600px) {
        width: 100%;
      }

      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
          max-width: 80%;
        }

        .icons {
          display: flex;
          justify: center;
          width: 20%;
          font-size: 24px;
          color: ${props => props.theme.colors.redMarvel};
        }
      }

      .description {
        margin: 1rem 0 0;
        color: ${props => props.theme.colors.textGrey};
        min-height: 40%;
      }

      .stats {
        margin: 2rem 0;
        display: flex;
        width: 100%;
        justify-content: space-around;

        .type {
          text-align: center;
          .numbers {
            display: flex;
            font-size: 24px;
            align-items: center;

            .icon {
              margin: 0 1rem 0 0;
              color: ${props => props.theme.colors.redMarvel};
            }
          }
        }
      }
    }

    .picture {
      width: 70%;
      display: flex;
      justify-content: center;
      @media (max-width: 600px) {
        width: 100%;
      }
    }
  }
`;
