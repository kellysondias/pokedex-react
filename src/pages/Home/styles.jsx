import styled from "styled-components";
import pokeball from "../../img/pokeball.png";
import openedPokeball from "../../img/opened-pokeball.png";

export const PokedexSection = styled.section`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  min-height: 100vh;
  padding-top: 12px;
  background-color: ${(props) => props.theme.background};

  .loading-screen {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 1rem;
  }

  .loading-icon {
    max-width: 150px;
  }

  .loading-message {
    margin-top: 1rem;
    font-size: 2.3rem;
    text-align: center;
    margin-top: 1rem;
  }

  input {
    max-width: 300px;
    width: 100%;
  }
`;

export const PokedexResults = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  width: 83%;
  margin: 0 auto;
`;

export const PokeCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: ${(props) => props.theme.cardBackground};
  margin: 1rem;
  border-radius: 5%;
  border: 0.5rem solid ${(props) => props.theme.border};
  padding: 2rem;
  max-width: 255px;
  cursor: pointer;

  div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }

  img {
    margin: 1rem auto;
    width: 100%;
  }

  span {
    font-size: 2.5rem;
    color: ${(props) => props.theme.color};
  }
`;

export const PokeId = styled.div`
  justify-content: center;
  text-transform: uppercase;

  span:last-child {
    margin-left: 0.5rem;
  }
`;

export const PokeTypes = styled.div`
  margin-top: 0.5rem;
  justify-content: space-evenly;
  color: ${(props) => props.theme.color};

  span {
    font-size: 2rem;
  }
`;

export const LoadingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  cursor: pointer;
  padding: 0.3rem 1.1rem;
  border-radius: 20px;
  font-size: 2.8rem;
  letter-spacing: -1.5px;
  word-spacing: -4px;
  font-family: "VT323", monospace;
  text-transform: uppercase;
  text-align: center;
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.color};
  border: 0.5rem solid ${(props) => props.theme.background};

  ::before {
    content: "";
    background: url(${pokeball}) no-repeat center center;
    background-size: contain;
    display: inline-block;
    width: 57px;
    height: 62px;
    margin-right: 0.7rem;
  }

  :hover {
    border-color: ${(props) => props.theme.buttonBorder};
  }

  :hover::before {
    content: "";
    background: url(${openedPokeball}) no-repeat center center;
    background-size: contain;
  }

  @media (max-width: 546px) {
    font-size: 2.5rem;

    ::before {
      width: 40px;
      height: 48px;
    }
  }
`;