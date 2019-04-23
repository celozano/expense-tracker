import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { getRunningTotal } from "../utils";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("gets correct running total", () => {
  let list = [{ total: 5 }, { total: 3 }, { total: 2 }];
  expect(getRunningTotal(list)).toEqual("$10.00");
});
