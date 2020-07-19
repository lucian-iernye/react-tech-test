import React from "react";
import { render } from "@testing-library/react";
import CreateBrand from "./CreateBrand";

describe("CreateBrand tests", () => {
  it("should render", () => {
    expect(render(<CreateBrand />)).toBeTruthy();
  });
});
