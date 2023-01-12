import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import {searchedListItems} from "../App/App.helpers";
import {list} from "../App/tests/App.helpers.test";
import TodoList from "./TodoList";


describe("check for add new item", () => {
  test("without searchedValue", () => {
    render(
      <TodoList
        searchedListItems={searchedListItems(list)}
        searchedValue={""}
        deleteCurrentListItem={() => {}}
        changeCompleted={() => {}}
        changeImportant={() => {}}
      />
    );
    expect(screen.getByText("test1")).toBeInTheDocument();
    expect(screen.getByText("test2")).toBeInTheDocument();
    expect(screen.getByText("test3")).toBeInTheDocument();
  });

  test("with searchedValue", () => {
    render(
      <TodoList
        searchedListItems={searchedListItems(list)}
        searchedValue={"2"}
        deleteCurrentListItem={() => {}}
        changeCompleted={() => {}}
        changeImportant={() => {}}
      />
    );
    expect(screen.queryByText("test1")).not.toBeInTheDocument();
    expect(screen.getByText("test2")).toBeInTheDocument();
  });
});
