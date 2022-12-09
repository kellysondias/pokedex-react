import { Strings } from "../../strings";
import {
  Flex,
  SearchField,
  SearchInput,
  Header,
  Button
} from "./styles";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-switcher";
import SearchIcon from "../../img/search-icon.png"

export const SearchBar = ({placeholder, search, change, filter}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Flex>
      <Header theme={theme}>{Strings.components.searchBar.searchBarHeader}</Header>

      <SearchField>
        <SearchInput
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={change}
          theme={theme}
        ></SearchInput>

        <Button
          src={SearchIcon}
          alt={Strings.components.searchBar.button.alt}
          onClick={filter}
          theme= {theme}
        />
      </SearchField>
    </Flex>
  );
};