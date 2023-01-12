import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import SearchBar from "./SearchBar";

test("check search field ", () => {
  render(
    <SearchBar searchedValue={"hello"} onChangeSearchedValue={() => {}} />
  );
  expect(screen.getByRole<HTMLInputElement>("textbox").value).toBe("hello");
});
