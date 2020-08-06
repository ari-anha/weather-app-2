import React from "react";
import { render } from "@testing-library/react";
import DetailedForecast from "../../Components/detailed-forecast";

it("renders the correct props", () => {
  const props = {
    forecasts: [
      {
        date: 1525046400000,
        temperature: {
          max: 11,
          min: 4,
        },
        wind: {
          speed: 13,
          direction: "s",
        },
        humidity: 30,
      },
    ],
  };

  const { getByText, debug } = render(
    <DetailedForecast forecasts={props.forecasts} />
  );

  debug();
  expect(getByText("Mon 30th Apr")).toHaveClass("date");
  expect(getByText("Max Temperature: 11°c")).toHaveClass("temperatureMax");
  expect(getByText("Min Temperature: 4°c")).toHaveClass("temperatureMin");
  expect(getByText("Humidity: 30%")).toHaveClass("humidity");
  expect(getByText("Wind: 13mph s")).toHaveClass("wind");
});
