import React from "react";

import { AttributesOfListItem } from "../App/App.enums";

interface ICounterElements {
  TOTAL: (count: number) => string;
  COMPLETED: (count: number) => string;
  IMPORTANT: (count: number) => string;
}

const LABELS: ICounterElements = {
  TOTAL: (count: number) => `Total: ${count}`,
  COMPLETED: (count: number) => `Completed: ${count}`,
  IMPORTANT: (count: number) => `Important: ${count}`,
};

type Props = {
  countOfStats: (attribute: AttributesOfListItem) => number;
};

const Counter = ({ countOfStats }: Props) => (
  <div>
    <div>{LABELS.TOTAL(countOfStats(AttributesOfListItem.label))}</div>
    <div>{LABELS.COMPLETED(countOfStats(AttributesOfListItem.completed))}</div>
    <div>{LABELS.IMPORTANT(countOfStats(AttributesOfListItem.important))}</div>
  </div>
);

export default Counter;


