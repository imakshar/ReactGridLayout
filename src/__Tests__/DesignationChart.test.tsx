import { render, screen } from "@testing-library/react";
import DesignationChart from "../components/DesignationChart/DesignationChart";
import EmployeeInfoContext from "../Store/Context";
import { defaultData } from "../Store/EmployeeContext";

test("render designation chart", () => {
  render(
    <EmployeeInfoContext.Provider value={defaultData}>
      <DesignationChart />
    </EmployeeInfoContext.Provider>
  );

  const designationChart = screen.getByTestId("designationChartTest");
  expect(designationChart).toBeInTheDocument();
});
