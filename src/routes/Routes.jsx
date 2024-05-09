import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        index: true,
        element: <Home></Home>
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
