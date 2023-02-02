import { RouterProvider } from "react-router-dom";
import "./App.css";
import MyContext from "./Context";
import { useEmployeeData } from "./EmployeeContext";
import router from "./router";
function App() {
  const myContext = useEmployeeData();

  return (
    <MyContext.Provider value={myContext}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
}

export default App;
