import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-switcher";
import { ThemeSwitcherButton } from "../theme-switcher-button/theme-switcher-button";
import { Strings } from "../../strings";
import { Flex } from "./styles";
import { Link } from "react-router-dom";

export const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Flex theme={theme}>
      <h1>
        <Link to="/">{Strings.logo}</Link>
      </h1>
      <ThemeSwitcherButton />
    </Flex>
  );
};