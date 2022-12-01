import { Strings } from "../../strings";
import {
  Flex,
  SearchField,
  SearchInput,
  Header,
  Button
} from "./styles";
import SearchIcon from "../../img/search-icon.png"

export const SearchBar = ({placeholder, search, change, filter}) => {
  return (
    <Flex>
      <Header>{Strings.components.searchBar.searchBarHeader}</Header>

      <SearchField>
        <SearchInput
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={change}
        ></SearchInput>

        <Button
          src={SearchIcon}
          alt={Strings.components.searchBar.button.alt}
          onClick={filter}
        />
      </SearchField>
    </Flex>
  );
};