import { Box } from "@mui/material";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const designationData = [
  {
    name: "9AM - 11AM",
    availableEmployees: 2000,
  },

  {
    name: "11AM - 02PM",
    availableEmployees: 5000,
  },
  {
    name: "02PM - 05PM",
    availableEmployees: 3400,
  },
  {
    name: "05PM - 07PM",
    availableEmployees: 5400,
  },
];
const EmployeeAvailabilityChart = () => {
  return (
    <Box height="100%">
      <Box display="flex" width="100%" height="100%" justifyContent="center">
        <Box display="flex" alignItems="center" width="100%">
          <ResponsiveContainer height="100%" width="100%">
            <BarChart width={50} height={30} data={designationData}>
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
