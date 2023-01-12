import { AttributesOfListItem } from "./App.enums";
import { INewItem } from "./App";

const countOfStats =
  (list: INewItem[]) =>
  (attribute: AttributesOfListItem): number =>
    list.reduce((acc, item) => {
      if (item[attribute]) return acc + 1;
      return acc;
    }, 0);

const searchedListItems =
  (list: INewItem[]) =>
  (label: string): INewItem[] =>
    list.filter((item) => item.label.toLowerCase().includes(label.trim()));

export { countOfStats, searchedListItems };
