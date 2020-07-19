import React from "react";
import { render } from "@testing-library/react";
import TyresList from "./TyresList";

describe("TyresList tests", () => {
  it("should render", () => {
    expect(render(<TyresList />)).toBeTruthy();
  });
});
