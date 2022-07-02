import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;

  .headingComponent {
    margin: 5rem 0 0;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 600px) {
      margin: 1rem 0.5rem 0;
    }

    .logoContainer {
      display: flex;
      color: ${props => props.theme.colors.text};
      justify-content: center;
      font-weight: 700;
      align-items: end;
      font-size: 0.8rem;

      .logoComent {
        margin: 0 0 0 1rem;
      }
    }

    .callContainer {
      text-align: center;

      .call {
        margin: 2rem 0 0;
        font-size: 2rem;
        color: ${props => props.theme.colors.text};
      }

      .subCall {
        margin: 1.5rem 0 0;
        color: ${props => props.theme.colors.textSecundary};
      }
    }

    .inputContainer {
      position: relative;
      margin: 4rem 0 0;
      width: 100%;
      max-width: 800px;

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
        background: #fdecec;
        padding: 1.2rem 4rem;
        font-size: 1rem;
        border-radius: 35px;
        color: ${props => props.theme.colors.redMarvel};
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

  .containerHeroes {
    margin: 5rem 0 2rem;
    width: 100%;

    .filtersContainer {
      display: flex;
      justify-content: space-between;
      width: 100%;

      @media (max-width: 600px) {
        margin: 1rem 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
    .amountHeroes {
      color: ${props => props.theme.colors.textGrey};
    }

    .filters {
      width: 30%;
      display: flex;
      justify-content: space-between;
      color: ${props => props.theme.colors.textRed};

      @media (max-width: 600px) {
        margin: 0.5rem 0;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: space-between;
      }

      .inputClass {
        display: flex;
        align-items: center;

        p {
          margin: 0 1rem 0 0;
        }

        .toggle-switch {
          position: relative;
          display: inline-block;
          align: center;
          width: 50px;
          height: 25px;

          input {
            display: none;
            &:checked {
              + {
                .switch {
                  &::before {
                    transform: translateX(25px);
                    background-color: ${props => props.theme.colors.redMarvel};
                    left: 3px;
                    top: 5px;
                    width: 15px;
                    height: 15px;
                  }
                  background-color: #e4e5e9;
                }
              }
            }
          }
          .switch {
            position: absolute;
            cursor: pointer;
            background-color: #e4e5e9;
            border-radius: 25px;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            transition: background-color 0.2s ease;
            &::before {
              position: absolute;
              content: '';
              left: 5px;
              top: 5px;
              width: 15px;
              height: 15px;
              background-color: #b30000;
              border-radius: 50%;
              transition: transform 0.3s ease;
            }
          }
        }
      }

      .favs {
        background: none;
        display: flex;
        border: none;
        align-items: center;
        color: ${props => props.theme.colors.textRed};
        font-size: 1rem;
        cursor: pointer;

        @media (max-width: 600px) {
          margin: 1rem 0 0;
        }

        .icons {
          font-size: 1.1rem;
          margin: 0 0.5rem 0 0;
          color: ${props => props.theme.colors.redMarvel};
        }
      }
    }

    .conteinerResults {
      margin: 2rem 0 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      @media (max-width: 600px) {
        justify-content: center;
      }
    }

    .controllerPage {
      display: flex;
      width: 100%;
      justify-content: right;
      align-items: center;
      color: ${props => props.theme.colors.redMarvel};

      button {
        background: transparent;
        margin: 0 1rem 0 0;
        border: none;
        padding: 1rem;
        border-radius: 100%;
        font-size: 24px;
        font-weight: 700;
        cursor: pointer;
        color: ${props => props.theme.colors.redMarvel};
      }

      p {
        margin: 0 1rem 0 0;
      }

      #maxPag {
        font-size: 80%;
      }
    }
  }

  .footer {
    width: 100%;
    height: 3rem;
    background: ${props => props.theme.colors.redMarvel};
  }
`;
