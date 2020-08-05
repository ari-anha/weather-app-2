import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../Components/forecast-summary";

describe("ForecastSummary", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={1525046400000}
        temperature="mockTemperature"
        description="mockDescription"
        icon="800"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct props", () => {
    const { getByText } = render(
      <ForecastSummary
        date={1525046400000}
        temperature="mockTemperature"
        description="mockDescription"
        icon="800"
      />
    );

    expect(getByText("Mon 30th Apr")).toHaveClass("date");
    expect(getByText("mockTemperature°c")).toHaveClass("temperature");
    expect(getByText("mockDescription")).toHaveClass("description");
    expect(getByText("???")).toHaveClass("wi wi-day-sunny icon???");
  });
});
