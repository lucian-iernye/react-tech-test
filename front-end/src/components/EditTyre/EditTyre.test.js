import React from "react";
import { render } from "@testing-library/react";
import EditTyre from "./EditTyre";

describe("EditTyre tests", () => {
  it("should render", () => {
    expect(render(<EditTyre />)).toBeTruthy();
  });
});
