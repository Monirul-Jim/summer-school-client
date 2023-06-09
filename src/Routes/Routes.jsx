import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import Login from "../Pages/LoginRegister/Login/Login";
import Register from "../Pages/LoginRegister/Register/Register";
import Instructor from "../Instructor/Instructor/Instructor";
import PrivateRoutes from "./PrivateRoutes";
import Classes from "../Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AdminRoutes from "./AdminRoutes";
import MyClasses from "../Pages/Dashboard/Dashboard/MyClasses/MyClasses";
import Payments from "../Pages/Dashboard/Payments/Payments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/instructor',
        element: <Instructor></Instructor>
      },
      {
        path: '/classes',
        element:<Classes></Classes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: 'all-users',
        element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      },
      {
        path: 'my-cart',
        element: <MyCart></MyCart>
      },
      {
        path:'my-classes',
        element:<MyClasses></MyClasses>
      },
      {
        path:'payments',
        element:<Payments></Payments>
      }
    ]
  }
]);
export default router;