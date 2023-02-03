import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />
    },
    {
      path: "/home",
      element: <Home />
    },
  ]);

export default router;