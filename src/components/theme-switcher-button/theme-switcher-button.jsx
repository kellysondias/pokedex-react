import React, { useContext } from "react";
import { SwitcherButton } from "./styles";
import { ThemeContext, themes } from "../../contexts/theme-switcher";

export const ThemeSwitcherButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <SwitcherButton>
      <img
        src={theme.image}
        alt={theme.alt}
        onClick={() =>
          setTheme(theme === themes.solrock ? themes.lunatone : themes.solrock)
        }
      />
    </SwitcherButton>
  );
};