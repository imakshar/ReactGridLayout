import { Box } from "@mui/material";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const designationData = [
  {
    joinee: 1000,
    leavers: 400,
  },
  {
    joinee: 5000,
    leavers: 800,
  },
  {
    joinee: 1000,
    leavers: 4000,
  },
  {
    joinee: 100,
    leavers: 2000,
  },
  {
    joinee: 1030,
    leavers: 100,
  },
];
const EmployeeHistoryChart = () => {
  return (
    <Box height="100%">
      <Box display="flex" width="100%" height="100%" justifyContent="center">
        <Box display="flex" alignItems="center" width="100%">
          <ResponsiveContainer height="100%" width="100%">
            <LineChart
              width={500}
              height={300}
              data={designationData}
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
