import { render, screen } from "@testing-library/react";
import EmployeeHistoryChart from "../components/EmployeeHistoryChart/EmployeeHistoryChart";
import EmployeeInfoContext from "../Store/Context";
import { defaultData } from "../Store/EmployeeContext";
test("render EmployeeHistory chart", () => {
  render(
    <EmployeeInfoContext.Provider value={defaultData}>
      <EmployeeHistoryChart />
    </EmployeeInfoContext.Provider>
  );

  const employeeHistoryChartTest = screen.getByTestId(
    "employeeHistoryChartTest"
  );
  expect(employeeHistoryChartTest).toBeInTheDocument();
});
