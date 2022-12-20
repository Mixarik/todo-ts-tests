import React from "react";

type Props = {
  searchedValue: string;
  onChangeSearchedValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ searchedValue, onChangeSearchedValue }: Props) => (
  <input
    onChange={(event) => {
      onChangeSearchedValue(event);
    }}
    value={searchedValue}
    className="form-control mb-3"
    type="text"
    placeholder="search"
  />
);
export default SearchBar;
