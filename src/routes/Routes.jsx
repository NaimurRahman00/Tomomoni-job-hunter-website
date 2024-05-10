import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Home2 from "../layout/Home2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {index: true,
        element: <Home2></Home2>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      }
    ]
  },
]);

export default router;
