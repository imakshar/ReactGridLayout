import "./App.css";
import router from "./Router/router";
import EmployeeInfoContext from "./Store/Context";
import { RouterProvider } from "react-router-dom";
import { useEmployeeData } from "./Store/EmployeeContext";

function App() {
  const employeeContext = useEmployeeData();

  return (
    <EmployeeInfoContext.Provider value={employeeContext}>
      <RouterProvider router={router} />
    </EmployeeInfoContext.Provider>
  );
}

export default App;
