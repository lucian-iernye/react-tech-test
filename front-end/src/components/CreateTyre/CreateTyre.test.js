import React from "react";
import { render } from "@testing-library/react";
import CreateTyre from "./CreateTyre";

describe("CreateTyre tests", () => {
  it("should render", () => {
    expect(render(<CreateTyre />)).toBeTruthy();
  });
});
