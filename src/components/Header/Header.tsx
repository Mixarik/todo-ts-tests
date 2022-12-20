import React from "react";

import Counter from "../Counter/Counter";

import { AttributesOfListItem } from "../App/App.enums";

type Props = {
  countOfStats: (attribute: AttributesOfListItem) => number;
};

const Header = ({ countOfStats }: Props) => (
  <div className="d-flex align-items-center justify-content-between mb-3">
    <h1 className="fw-normal align-items-baseline">TODO-LIST</h1>
    <Counter countOfStats={countOfStats} />
  </div>
);

export default Header;
