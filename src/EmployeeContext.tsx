import { useState } from "react";
export interface EmployeeInfo {
    employeeData : any;
    setEmployeeData : any;
}
export const useEmployeeData = (): EmployeeInfo => {
  const [employeeData, setEmployeeData] = useState({
    name: "John Doe",
    age: 32,
  });

  return { employeeData, setEmployeeData };
};
