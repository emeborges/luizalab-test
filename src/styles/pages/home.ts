import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;

  .headingComponent {
    margin: 5rem 0 0;
    display: flex;
    align-items: center;
    flex-direction: column;

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

  .containerHeros {
    margin: 5rem 0 0;
    display: flex;
    justify-content: space-between;
    width: 100%;

    .resultsHeros {
      color: ${props => props.theme.colors.textGrey};
    }

    .filterContainer {
      width: 30%;
      display: flex;
      justify-content: space-between;
      color: ${props => props.theme.colors.textRed};

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

        .icons {
          font-size: 1.1rem;
          margin: 0 0.5rem 0 0;
          color: ${props => props.theme.colors.redMarvel};
        }
      }
    }
  }
`;
