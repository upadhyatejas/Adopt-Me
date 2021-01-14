import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ANIMALS } from "@frontendmasters/pet";
import SearchParams from "../SeachParams";

afterEach(cleanup);

test("SearchParams", async () => {
  const { getByTestId } = render(<SearchParams />);

  const animalDropdown = getByTestId("use-dropdown-animal");
  expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);
});
