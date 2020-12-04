import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Search from "./Search";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders without crashing", () => {
  act(() => {
    render(<Search />, container);
  });

  expect(container.innerHTML).toMatchSnapshot();
});

it("display placeholder", () => {
  act(() => {
    render(<Search />, container);
  });
  expect(container.querySelector("input").placeholder).toBe("Search");

  act(() => {
    render(<Search placeholder="Enter a city" />, container);
  });
  expect(container.querySelector("input").placeholder).toBe("Enter a city");
});
