import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useInput } from "../hooks/useInput.hook";

import { Header } from "../Header";
import { SearchBar } from "../SearchBar";
import { TodoList } from "../TodoList";
import { AddTodoItem } from "../AddTodoItem";

import { AttributesOfListItem } from "./App.enums";

import { countOfStats, searchedListItems } from "./App.helpers";

import styles from "./App.module.scss";

export interface INewItem {
  label: string;
  important: boolean;
  completed: boolean;
  id: string;
}

const App = () => {
  const [list, setList] = useState<INewItem[]>([]);

  const { value: searchedValue, onChange: onChangeSearchedValue } =
    useInput("");

  const newItem = (label: string): INewItem => ({
    label,
    important: false,
    completed: false,
    id: uuidv4(),
  });

  const addNewItemList = (label: string): void => {
    label.trim() && setList((prevState) => [...prevState, newItem(label)]);
  };

  const switchCurrentAttribute =
    (attribute: AttributesOfListItem) =>
    (id: string): void =>
      setList((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, [attribute]: !item[attribute] } : item
        )
      );

  const changeImportant: (id: string) => void = switchCurrentAttribute(
    AttributesOfListItem.important
  );
  const changeCompleted: (id: string) => void = switchCurrentAttribute(
    AttributesOfListItem.completed
  );

  const deleteCurrentListItem = (id: string): void =>
    setList((prevState) => prevState.filter((item) => item.id !== id));

  return (
    <div className={styles.wrapper}>
      <Header countOfStats={countOfStats(list)} />
      <SearchBar
        onChangeSearchedValue={onChangeSearchedValue}
        searchedValue={searchedValue}
      />
      <TodoList
        searchedListItems={searchedListItems(list)}
        {...{
          changeCompleted,
          changeImportant,
          deleteCurrentListItem,
          searchedValue,
        }}
      />
      <AddTodoItem addNewItemList={addNewItemList} />
    </div>
  );
};

export default App;
