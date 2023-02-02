import { RouterProvider } from "react-router-dom";
import "./App.css";
import EmployeeInfoContext from "./Context";
import { useEmployeeData } from "./EmployeeContext";
import router from "./router";
function App() {
  const myContext = useEmployeeData();

  return (
    <EmployeeInfoContext.Provider value={myContext}>
      <RouterProvider router={router} />
    </EmployeeInfoContext.Provider>
  );
}

export default App;
