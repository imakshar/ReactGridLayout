import { Box } from "@mui/material";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import EmployeeInfoContext from "../../Store/Context";
import { useContext } from "react";
import { EmployeeInfo } from "../../Store/EmployeeContext";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = (args: any): any => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = args;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DesignationChart = () => {
  const { employeeDesignationData } = useContext<EmployeeInfo>(EmployeeInfoContext);
  return (
    <Box height="100%">
      <Box display="flex" width="100%" height="100%" justifyContent="center">
        <Box display="flex" alignItems="center" width="100%">
          <ResponsiveContainer height="100%" width="100%">
            <PieChart height={1200} width={1200}>
              <Pie
                data={employeeDesignationData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {employeeDesignationData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default DesignationChart;
