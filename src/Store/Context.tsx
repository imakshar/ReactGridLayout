import React from "react";
import { EmployeeInfo } from "./EmployeeContext";

const EmployeeInfoContext = React.createContext<EmployeeInfo>(null!);

export default EmployeeInfoContext;
