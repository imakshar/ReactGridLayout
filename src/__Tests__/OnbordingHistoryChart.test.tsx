import { render, screen } from "@testing-library/react";
import OnbordingHistoryChart from "../components/OnbordingHistoryChart/OnbordingHistoryChart";
import EmployeeInfoContext from "../Store/Context";
import { defaultData } from "../Store/EmployeeContext";
test("render OnbordingHistory chart", () => {
  render(
    <EmployeeInfoContext.Provider value={defaultData}>
      <OnbordingHistoryChart />
    </EmployeeInfoContext.Provider>
  );

  const onbordingHistoryChartTest = screen.getByTestId(
    "onbordingHistoryChartTest"
  );
  expect(onbordingHistoryChartTest).toBeInTheDocument();
});
