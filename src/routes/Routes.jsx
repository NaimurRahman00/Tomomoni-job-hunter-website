import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Home2 from "../layout/Home2";
import JobDetails from "../pages/JobDetails";
import ErrorPage from "../pages/ErrorPage";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import PrivateRoute from "./PrivateRoute";
import AppliedJobs from "../pages/AppliedJobs";
import BidRequests from "../pages/BidRequests";
import AllJobs from "../pages/AllJobs";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <Home2></Home2> },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/add-job",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-jobs",
        element: (
          <PrivateRoute>
            <AllJobs></AllJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-posted-job",
        element: (
          <PrivateRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/job-details/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/applied-jobs",
        element: (
          <PrivateRoute>
            <AppliedJobs></AppliedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/bid-request",
        element: (
          <PrivateRoute>
            <BidRequests></BidRequests>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
