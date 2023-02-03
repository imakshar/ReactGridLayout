import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import EmployeeInfoContext from "../Store/Context";
import { defaultData } from "../Store/EmployeeContext";
test("render home page and charts", () => {
  render(
    <BrowserRouter>
      <EmployeeInfoContext.Provider value={defaultData}>
        <HomePage />
      </EmployeeInfoContext.Provider>
    </BrowserRouter>
  );

  const navbar = screen.getByTestId("navbar");
  expect(navbar).toBeInTheDocument();

  const responsiveGridLayout = screen.getByTestId("responsiveGridLayout");
  expect(responsiveGridLayout).toBeInTheDocument();

  const designationChart = screen.getByTestId("designationChart");
  expect(designationChart).toBeInTheDocument();

  const employeeAvailabilityChart = screen.getByTestId(
    "employeeAvailabilityChart"
  );
  expect(employeeAvailabilityChart).toBeInTheDocument();

  const employeeHistoryChart = screen.getByTestId("employeeHistoryChart");
  expect(employeeHistoryChart).toBeInTheDocument();

  const onbordingHistoryChart = screen.getByTestId("onbordingHistoryChart");
  expect(onbordingHistoryChart).toBeInTheDocument();
});
