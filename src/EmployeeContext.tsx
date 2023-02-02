import { useState } from "react";
import { availabilityData } from "./data/employeeAvailabilityData";
import { designationData } from "./data/employeeDesignationData";
import { historyData } from "./data/employeeHistoryData";
import { onboardingData } from "./data/employeeOnboardingData";
export interface IEmployeeDesignatioInfo {
  name: string;
  value: number;
}
export interface IEmployeeAvailabilityInfo {
  name: string;
  availableEmployees: number;
}
export interface IEmployeeHistoryInfo {
  joinee: number;
  leavers: number;
}
export interface IEmployeeOnboardingInfo {
  offered: number;
  onboarded: number;
}
export interface EmployeeInfo {
  employeeDesignationData: IEmployeeDesignatioInfo[];
  employeeAvailabilityData: IEmployeeAvailabilityInfo[];
  employeeHistoryData: IEmployeeHistoryInfo[];
  employeeOnboardingData: IEmployeeOnboardingInfo[];
}

const defaultData: EmployeeInfo = {
  employeeDesignationData: designationData,
  employeeAvailabilityData: availabilityData,
  employeeHistoryData: historyData,
  employeeOnboardingData: onboardingData,
};

export const useEmployeeData = (): EmployeeInfo => {
  const [employeeData] = useState<EmployeeInfo>(defaultData);

  return employeeData;
};
