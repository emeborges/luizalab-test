import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.backgroundSec};

  .header {
    padding: 3.125rem 0;
    display: flex;
    align-items: center;

    .logoContainer {
      display: flex;
      color: ${props => props.theme.colors.text};
      font-weight: 700;
      align-items: center;
      font-size: 0.8rem;

      .logoComent {
        margin: 0 0 0 1rem;
        font-size: 16px;
      }
    }
    .inputContainer {
      position: relative;
      width: 100%;
      max-width: 700px;
      margin: 0 6.25rem;

      .icon {
        position: absolute;
        top: 13px;
        left: 20px;
        z-index: 10;
        border: none;
        background: transparent;
        outline: none;
        font-size: 2rem;
        color: ${props => props.theme.colors.redMarvel};
      }

      input {
        width: 100%;
        border: none;
        background: ${props => props.theme.colors.backgroundBase};
        padding: 1.2rem 4rem;
        font-size: 1rem;
        border-radius: 35px;
        color: ${props => props.theme.colors.textSecundary};
        transition: all 0.3s;

        &:focus {
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
          outline: 0;
        }

        &:hover {
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }

  .details {
    margin: 0 2rem;
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.colors.textDarkGrey};

    .heroDetail {
      display: flex;
      width: 30%;
      justify-content: center;
      flex-direction: column;

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
        color: ${props => props.theme.colors.textGrey};
        min-height: 40%;
      }

      .stats {
        margin: 2rem 0;
        display: flex;
        width: 100%;
        justify-content: space-around;

        .comics {
          .numbers {
            display: flex;
            font-size: 24px;

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
    }
  }
`;
