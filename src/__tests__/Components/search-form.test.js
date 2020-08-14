// import React from "react";
// import { render } from "@testing-library/react";
// import SearchForm from "../../Components/search-form";

// describe("ForecastSummary", () => {
//     it("renders correctly", () => {
//       const { asFragment } = render(
//         <ForecastSummary
//           date={1525046400000}
//           temperature="mockTemperature"
//           description="mockDescription"
//           icon="800"
//         />
//       );

//       expect(asFragment()).toMatchSnapshot();
//     });

//     it("renders the correct props", () => {
//       const { getByText, getByTestId } = render(
//         <ForecastSummary
//           date={1525046400000}
//           temperature="mockTemperature"
//           description="mockDescription"
//           icon="800"
//         />
//       );

//       expect(getByText("Mon 30th Apr")).toHaveClass("date");
//       expect(getByText("mockTemperature°c")).toHaveClass("temperature");
//       expect(getByText("mockDescription")).toHaveClass("description");
//       expect(getByTestId("icon-id")).toHaveClass("wi wi-day-sunny icon");
//     });
//   });

// it("renders the correct city and location props", () => {
//   const { getByText } = render(<SearchForm city="Manchester" country="UK" />);

//   expect(getByText("Manchester, UK")).toHaveClass("location-details");
// });
// When I enter the name of a UK city in the search function,
// it should return the text "<City name>, GB" back.
//
// Maybe use mock data, then use:
// expect(getByText("York, GB")).toHaveClass("location-details")
// or something?
//
// Another idea:
// test("renders learn react link", () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
//   });
