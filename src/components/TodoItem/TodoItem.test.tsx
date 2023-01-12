import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/dist";

import TodoItem from "./TodoItem";

const Props = (label: string, important: boolean, completed: boolean) => ({
  deleteCurrentListItem: () => {},
  changeCompleted: () => {},
  changeImportant: () => {},
  id: "1",
  label,
  important,
  completed,
});

describe("test TodoItem", () => {
  test("test TodoItem include props label", () => {
    render(<TodoItem {...Props("test1", false, false)} />);
    expect(screen.getByText("test1")).toBeInTheDocument();
  });

  test("test TodoItem important change class", () => {
    render(<TodoItem {...Props("test1", true, false)} />);
    userEvent.click(screen.getByText("test1"));
    expect(screen.getByText("test1").getAttribute("class")).toMatch(
      /fw-bold fst-italic text-primary/gi
    );
  });

  test("test TodoItem important change class", () => {
    render(<TodoItem {...Props("test1", false, true)} />);
    userEvent.click(screen.getByText("test1"));
    expect(screen.getByText("test1").getAttribute("class")).toMatch(
      /text-decoration-line-through/gi
    );
  });

  test("test TodoItem tabIndex", () => {
    render(<TodoItem {...Props("test1", false, false)} />);
    expect(screen.getByText("test1").getAttribute("tabIndex")).toBe("0");
  });
});
