import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import RegisterTest from "../Test/ReactHookForm/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/shared/Secret/Secret";
import Dashboard from "../layouts/Dashboard";
import MyCart from "../pages/dashboard/MyCart/MyCart";
import UserHome from "../pages/dashboard/UserHome/UserHome";
import Reservation from "../pages/dashboard/Reservation/Reservation";
import AddReview from "../pages/dashboard/AddReview/AddReview";
import MyOrder from "../pages/dashboard/MyOrder/MyOrder";
import PaymentHistory from "../pages/dashboard/PaymentHistory/PaymentHistory";
import Contact from "../pages/Contact/Contact";
import AdminHome from "../pages/dashboard/AdminHome/AdminHome.jsx";
import AddItem from "../pages/dashboard/AddItem/AddItem";
import ManageItems from "../pages/dashboard/ManageItems/ManageItems";
import ManageBookings from "../pages/dashboard/ManageBookings/ManageBookings";
import AllUsers from "../pages/dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import ErrorRoute from "../pages/home/ErrorRoute/ErrorRoute";
import Payment from "../pages/dashboard/Payment/Payment";
// import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "error",
        element: <ErrorRoute />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <RegisterTest />,
  },
  {
    path: "secret",
    element: (
      <PrivateRoute>
        <Secret />
      </PrivateRoute>
    ),
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/user-home",
        element: <UserHome />,
      },
      {
        path: "/dashboard/admin-home",
        element: <AdminHome />,
      },
      {
        path: "my-cart",
        element: <MyCart />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "add-review",
        element: <AddReview />,
      },
      {
        path: "my-order",
        element: <MyOrder />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "add-item",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "manage-bookings",
        element: (
          <AdminRoute>
            <ManageBookings />
          </AdminRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
