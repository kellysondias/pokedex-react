import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-switcher";
import { ThemeSwitcherButton } from "../theme-switcher-button/theme-switcher-button";
import { Link } from "react-router-dom";

export const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Heading theme={theme}>
      <h1>
        <Link to="/">Pokédex</Link>
      </h1>
      <ThemeSwitcherButton />
    </Heading>
  );
};

const Heading = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-family: "Press Start 2P", monospace;
  background-color: ${(props) => props.theme.headerBackground};
  padding-top: 5px;

  h1 {
    font-size: 3.5rem;
    font-weight: "400";
    margin-left: 2.4rem;
  }

  a {
    color: ${(props) => props.theme.headerColor};
  }

  @media (max-width: 620px) {
    flex-direction: column-reverse;
    padding-bottom: 3.2rem;

    h1 {
      margin-left: 0;
      text-align: center;
    }
  }
`;
