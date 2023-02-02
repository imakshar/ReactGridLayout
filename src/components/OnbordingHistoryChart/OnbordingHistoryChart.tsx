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
    offered: 1200,
    onboarded: 1000,
  },
  {
    offered: 1000,
    onboarded: 700,
  },
  {
    offered: 500,
    onboarded: 400,
  },
  {
    offered: 700,
    onboarded: 650,
  },
];
const OnbordingHistoryChart = () => {
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

              <Line type="monotone" dataKey="offered" stroke="#82ca9d" />
              <Line type="monotone" dataKey="onboarded" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default OnbordingHistoryChart;
