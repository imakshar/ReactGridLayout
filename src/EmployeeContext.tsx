import { useState } from "react";
export interface IEmployeeDesignationData {
  name: string;
  count: number;
}
export interface EmployeeInfo {
  employeeDesignationData: IEmployeeDesignationData[];
}

const defaultData: EmployeeInfo = {
  employeeDesignationData: [],
};

export const useEmployeeData = (): EmployeeInfo => {
  const [employeeData, setEmployeeData] = useState<EmployeeInfo>(defaultData);

  return employeeData
};
