import React from "react";
import { EmployeeInfo } from "./EmployeeContext";

const MyContext = React.createContext<EmployeeInfo | null>(null);

export default MyContext;
