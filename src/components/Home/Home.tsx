import { useState } from 'react';
import { Layout, Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
const defaultLayout: Layout[] = [
  { i: "a", x: 0, y: 0, w: 6, h: 2, minH: 2 },
  { i: "b", x: 0, y: 0, w: 6, h: 2, minH: 2 },
  { i: "c", x: 6, y: 0, w: 6, h: 2, minH: 2 },
  { i: "d", x: 6, y: 0, w: 6, h: 2, minH: 2 },
];
const ResponsiveGridLayout = WidthProvider(Responsive);

const Home = () => {
  const [layout, setLayout] = useState(defaultLayout);
  return (
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
      <div key="a">
        A
      </div>

      <div key="b">
        B
      </div>
      <div key="c">
        C
      </div>
      <div key="d">
        D
      </div>
    </ResponsiveGridLayout>
  );
};

export default Home