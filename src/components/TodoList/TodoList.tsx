import React from "react";

import TodoItem from "../TodoItem/TodoItem";

import { INewItem } from "../App/App";

type Props = {
  searchedListItems: (label: string) => INewItem[];
  searchedValue: string;
  deleteCurrentListItem: (id: string) => void;
  changeCompleted: (id: string) => void;
  changeImportant: (id: string) => void;
};

const TodoList = ({
  searchedListItems,
  searchedValue,
  deleteCurrentListItem,
  changeCompleted,
  changeImportant,
}: Props) => (
  <ul className="list-group mb-3">
    {searchedListItems(searchedValue).map((item) => (
      <TodoItem
        {...{
          key: item.id,
          changeCompleted,
          changeImportant,
          deleteCurrentListItem,
          ...item,
        }}
      />
    ))}
  </ul>
);

export default TodoList;
