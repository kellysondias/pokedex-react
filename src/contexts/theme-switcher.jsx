import { createContext, useState } from "react";
import solrockSprite from "../img/solrock.png";
import lunatoneSprite from "../img/lunatone.png";

export const themes = {
  lunatone: {
    alt: "Switch to 'light mode'",
    background: "#58596f",
    border: "#0e0c0c",
    buttonBackground: "#27193f",
    buttonBorder: "#5825a8",
    cardBackground: "#114269",
    color: "#e2e2e2",
    headerBackground: "#010a2e",
    headerColor: "#e2e2e2",
    image: solrockSprite,
    pokedexCard: "#1a0044",
    pokemonBorder: "#0e0c0c",
    pokemonColor: "#e2e2e2",
    pokemonInfoBg: "#0e535c",
    pokemonInfoHeaderBorderColor: "#0e0c0c",
    pokemonProfileBg: "#2a7585",
    pokemonTypeBg: "#010a2e",
    pokemonTypeColor: "#e2e2e2",
    searchBarBorder: "#010a2e",
    searchBarHeaderColor: "#fff",
    searchButtonBg: "#7d78a3",
    unfoundImageBg: "#eee",
    unfoundText: "#e2e2e2",
    unfoundSuggestions: "#e2e2e2"
  },
  solrock: {
    alt: "Switch to 'dark mode'",
    background: "#e3f3ed",
    border: "#484860",
    buttonBackground: "#a071ee",
    buttonBorder: "#ef713f",
    cardBackground: "#3890d6",
    color: "#f4f4f3",
    headerBackground: "#9e2a28",
    headerColor: "#f4f4f3",
    image: lunatoneSprite,
    pokedexCard: "#d43339",
    pokemonBorder: "#000",
    pokemonColor: "#272626",
    pokemonInfoBg: "#89e5f1",
    pokemonInfoHeaderBorderColor: "#f4f4f3",
    pokemonProfileBg: "#bee9f3",
    pokemonTypeBg: "#9e2a28",
    pokemonTypeColor: "#f4f4f3",
    searchBarBorder: "#616161",
    searchBarHeaderColor: "#000",
    searchButtonBg: "#ee6b2f",
    unfoundImageBg: "transparent",
    unfoundText: "#616161",
    unfoundSuggestions: "#919191"
  }
};

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.solrock);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};