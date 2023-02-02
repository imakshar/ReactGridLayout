import { useContext } from "react";
import { Box } from "@mui/material";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import EmployeeInfoContext from "../../Context";
import { EmployeeInfo } from "../../EmployeeContext";

const EmployeeHistoryChart = () => {
  const { employeeHistoryData } = useContext<EmployeeInfo>(EmployeeInfoContext);
  return (
    <Box height="100%">
      <Box display="flex" width="100%" height="100%" justifyContent="center">
        <Box display="flex" alignItems="center" width="100%">
          <ResponsiveContainer height="100%" width="100%">
            <LineChart
              width={500}
              height={300}
              data={employeeHistoryData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Line type="monotone" dataKey="joinee" stroke="#82ca9d" />
              <Line type="monotone" dataKey="leavers" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeeHistoryChart;
