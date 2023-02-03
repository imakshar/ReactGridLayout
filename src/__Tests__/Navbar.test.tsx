import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import EmployeeInfoContext from "../Store/Context";
import { defaultData } from "../Store/EmployeeContext";

test("render navbar", () => {
  render(
    <BrowserRouter>
      <EmployeeInfoContext.Provider value={defaultData}>
        <Navbar />
      </EmployeeInfoContext.Provider>
    </BrowserRouter>
  );
  const appBar = screen.getByTestId("appbar");
  expect(appBar).toBeInTheDocument();
});
