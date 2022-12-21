import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-switcher";
import { ThemeSwitcherButton } from "../theme-switcher-button/theme-switcher-button";
import { strings } from "../../services/strings";
import { Flex } from "./styles";
import { Link } from "react-router-dom";

export const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Flex theme={theme}>
      <h1>
        <Link to="/">
          {strings.logo}
        </Link>
      </h1>
      <ThemeSwitcherButton />
    </Flex>
  );
};