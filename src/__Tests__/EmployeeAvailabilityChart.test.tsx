import { render, screen } from "@testing-library/react";
import EmployeeAvailabilityChart from "../components/EmployeeAvailabilityChart/EmployeeAvailabilityChart";
import EmployeeInfoContext from "../Store/Context";
import { defaultData } from "../Store/EmployeeContext";
test("render EmployeeAvailability chart", () => {
  render(
    <EmployeeInfoContext.Provider value={defaultData}>
      <EmployeeAvailabilityChart />
    </EmployeeInfoContext.Provider>
  );

  const employeeAvailabilityChartTest = screen.getByTestId(
    "employeeAvailabilityChartTest"
  );
  expect(employeeAvailabilityChartTest).toBeInTheDocument();
});
