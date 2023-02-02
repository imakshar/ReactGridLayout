import React from 'react';
import { EmployeeInfo } from './EmployeeContext';

const MyContext = React.createContext<EmployeeInfo>({
    employeeData: '',
    setEmployeeData: () => null
});

export default MyContext;