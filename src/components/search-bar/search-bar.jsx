import { SearchField } from "../styled-comps/search-field/search-field";
import { SearchInput } from "../styled-comps/search-input/search-input";
/* import { SearchButton } from "../styled-comps/search-button/search-button"; */

export const SearchBar = ({placeholder, search, change, filter}) => {
  return (
    <SearchField>
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={change}
      ></SearchInput>
      <button onClick={filter}>
        Filter
      </button>
    </SearchField>
  );
};