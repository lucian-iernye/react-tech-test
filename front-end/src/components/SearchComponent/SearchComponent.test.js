import React from "react";
import { render } from "@testing-library/react";
import SearchComponent from "./SearchComponent";

describe("SearchComponent tests", () => {
  it("should render", () => {
    expect(render(<SearchComponent />)).toBeTruthy();
  });
});
