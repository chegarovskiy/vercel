/**
* @jest-environment jsdom
*/

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../app/page";

describe('Home', () => {
  it("Check for Getting Started Text", () => {
   const { getByText } = render(<Home />);
   expect(getByText("Home!")).toBeInTheDocument();
 });
});