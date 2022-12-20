import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useInput } from "../hooks/useInput.hook";

import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import TodoList from "../TodoList/TodoList";
import AddTodoItem from "../AddTodoItem/AddTodoItem";

import { AttributesOfListItem } from "./App.enums";

import styles from "./App.module.scss";

export interface INewItem {
  label: string;
  important: boolean;
  completed: boolean;
  id: string;
}

function App() {
  const [list, setList] = useState<INewItem[]>([]);

  const { value: searchedValue, onChange: onChangeSearchedValue } =
    useInput('');

  const newItem = (label: string): INewItem => ({
    label,
    important: false,
    completed: false,
    id: uuidv4(),
  });

  const addNewItemList = (label: string,): void | boolean => {
    if (label.trim()) {
      setList((prevState) => [...prevState, newItem(label)]);
      return true;
    }
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

  const searchedListItems = (label: string): INewItem[] =>
    list.filter((item) => item.label.toLowerCase().includes(label.trim()));

  const countOfStats = (attribute: AttributesOfListItem): number =>
    list.reduce((acc, item) => {
      if (item[attribute]) return acc + 1;
      return acc;
    }, 0);

  return (
    <div className={styles.wrapper}>
      <Header countOfStats={countOfStats} />
      <SearchBar
        onChangeSearchedValue={onChangeSearchedValue}
        searchedValue={searchedValue}
      />
      <TodoList
        {...{
          changeCompleted,
          changeImportant,
          deleteCurrentListItem,
          searchedValue,
          searchedListItems,
        }}
      />
      <AddTodoItem addNewItemList={addNewItemList} />
    </div>
  );
}

export default App;
