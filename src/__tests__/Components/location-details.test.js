import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../Components/location-details";

it("renders the correct city and location props", () => {
  const { getByText } = render(
    <LocationDetails city="Manchester" country="GB" />
  );

  expect(getByText("Manchester, GB")).toHaveClass("location-details");
});
