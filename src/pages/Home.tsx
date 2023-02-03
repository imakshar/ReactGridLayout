import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HistoryIcon from "@mui/icons-material/History";
import PeopleIcon from "@mui/icons-material/People";
import PollIcon from "@mui/icons-material/Poll";
import { Paper } from "@mui/material";
import { useState } from "react";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import CustomTitleBox from "../components/CustomTitleBox/CustomTitleBox";
import DesignationChart from "../components/DesignationChart/DesignationChart";
import EmployeeAvailabilityChart from "../components/EmployeeAvailabilityChart/EmployeeAvailabilityChart";
import EmployeeHistoryChart from "../components/EmployeeHistoryChart/EmployeeHistoryChart";
import Navbar from "../components/Navbar/Navbar";
import OnbordingHistoryChart from "../components/OnbordingHistoryChart/OnbordingHistoryChart";
const defaultLayout: Layout[] = [
  { i: "designationChart", x: 0, y: 0, w: 6, h: 2, minH: 2 },
  { i: "onbordingHistoryChart", x: 0, y: 0, w: 6, h: 2, minH: 2 },
  { i: "employeeHistoryChart", x: 6, y: 0, w: 6, h: 2, minH: 2 },
  { i: "employeeAvailabilityChart", x: 6, y: 0, w: 6, h: 2, minH: 2 },
];
const ResponsiveGridLayout = WidthProvider(Responsive);

const Home = () => {
  const [layout, setLayout] = useState(defaultLayout);
  return (
    <div>
      <Navbar />
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout, md: layout, sm: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        onLayoutChange={(currentLayout) => {
          setLayout(currentLayout);
        }}
        rowHeight={155}
      >
        <Paper key="designationChart" elevation={6}>
          <CustomTitleBox title="Designation Statistics" icon={<PeopleIcon />}>
            <DesignationChart />
          </CustomTitleBox>
        </Paper>

        <Paper key="employeeAvailabilityChart" elevation={6}>
          <CustomTitleBox
            title="Employee Availability"
            icon={<EventAvailableIcon />}
          >
            <EmployeeAvailabilityChart />
          </CustomTitleBox>
        </Paper>
        
        <Paper key="onbordingHistoryChart" elevation={6}>
          <CustomTitleBox title="Onboarding Statistics" icon={<PollIcon />}>
            <OnbordingHistoryChart />
          </CustomTitleBox>
        </Paper>

        <Paper key="employeeHistoryChart" elevation={6}>
          <CustomTitleBox title="Employee History" icon={<HistoryIcon />}>
            <EmployeeHistoryChart />
          </CustomTitleBox>
        </Paper>
      </ResponsiveGridLayout>
    </div>
  );
};

export default Home;
