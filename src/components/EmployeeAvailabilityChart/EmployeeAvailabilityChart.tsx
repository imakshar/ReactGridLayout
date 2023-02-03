import { Box } from "@mui/material";
import { useContext } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import EmployeeInfoContext from "../../Store/Context";
import { EmployeeInfo } from "../../Store/EmployeeContext";

const EmployeeAvailabilityChart = () => {
  const { employeeAvailabilityData } = useContext<EmployeeInfo>(EmployeeInfoContext);
  return (
    <Box height="90%">
      <Box display="flex" width="100%" height="100%" justifyContent="center">
        <Box display="flex" alignItems="center" width="100%">
          <ResponsiveContainer height="100%" width="100%">
            <BarChart width={50} height={30} data={employeeAvailabilityData}>
              <Bar dataKey="availableEmployees" fill="#8884d8" />
              <Tooltip />
              <XAxis dataKey="name" />
              <YAxis />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeeAvailabilityChart;
