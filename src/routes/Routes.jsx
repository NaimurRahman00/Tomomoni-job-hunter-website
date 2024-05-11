import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Home2 from "../layout/Home2";
import JobDetails from "../pages/JobDetails";
import ErrorPage from "../pages/ErrorPage";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {index: true,
        element: <Home2></Home2>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path: "/add-job",
        element: <AddJob></AddJob>
      },
      {
        path: "/my-posted-job",
        element: <MyPostedJobs></MyPostedJobs>
      },
      {
        path: "/job-details/:id",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`) 
      }
    ]
  },
]);

export default router;
