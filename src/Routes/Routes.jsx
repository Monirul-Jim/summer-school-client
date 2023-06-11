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
import AddClasses from "../Pages/Dashboard/Instructor/AddClasses/AddClasses";
import InstructorClass from "../Pages/Dashboard/Instructor/InstructorClass/InstructorClass";
import ApprovedClass from "../Pages/Dashboard/ApprovedClass/ApprovedClass";
import Error from "../Shared/Error/Error";

const router = createBrowserRouter([
  {
    path:'*',
    element:<Error></Error>
  },
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
        path:'approved-classes',
        element:<ApprovedClass></ApprovedClass>
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
        path:'payments/:id',
        element:<Payments></Payments>
      },
      {
        path:'add-classes',
        element:<AddClasses></AddClasses>
      },
      {
        path:'instructor-classes',
        element:<InstructorClass></InstructorClass>
      }
    ]
  }
]);
export default router;