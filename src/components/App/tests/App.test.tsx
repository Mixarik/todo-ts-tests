import React from "react";
import ReactDOM from "react-dom";

import App from "../App";

describe("testing APP", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
