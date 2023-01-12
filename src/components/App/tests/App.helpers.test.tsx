import React from "react";

import { INewItem } from "../App";
import { AttributesOfListItem } from "../App.enums";
import { countOfStats, searchedListItems } from "../App.helpers";

export const list: INewItem[] = [
  {
    label: "test1",
    important: true,
    completed: false,
    id: "1",
  },
  {
    label: "test2",
    important: false,
    completed: true,
    id: "2",
  },
  {
    label: "test3",
    important: false,
    completed: true,
    id: "3",
  },
];

describe("test helpers for App", () => {
  test("test countOfStats", () => {
    expect(countOfStats(list)(AttributesOfListItem.label)).toEqual(3);
    expect(countOfStats(list)(AttributesOfListItem.important)).toEqual(1);
    expect(countOfStats(list)(AttributesOfListItem.completed)).toEqual(2);
  });
  test("test searchedListItems", () => {
    expect(searchedListItems(list)("2")).toStrictEqual([
      {
        label: "test2",
        important: false,
        completed: true,
        id: "2",
      },
    ]);
  });
});
