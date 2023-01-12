import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/dist";

import AddTodoItem from "./AddTodoItem";

test("clearing the field after submit", () => {
  render(<AddTodoItem addNewItemList={() => {}} />);
  const input = screen.getByRole<HTMLInputElement>("textbox");
  const button = screen.getByRole<HTMLInputElement>("button");

  userEvent.type(input, "test");
  expect(input.value).toBe("test");
  userEvent.click(button);
  expect(input.value).toBe("");
});
