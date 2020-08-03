import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../Components/location-details";

it("renders the correct city and location props", () => {
  const { getByText } = render(
    <LocationDetails city="Asahikawa" country="Japan" />
  );

  expect(getByText("Asahikawa, Japan")).toHaveClass("location-details");
});
