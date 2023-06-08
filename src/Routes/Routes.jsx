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

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/instructor',
          element:<PrivateRoutes><Instructor></Instructor></PrivateRoutes>
        },
        {
          path:'/classes',
          element:<PrivateRoutes><Classes></Classes></PrivateRoutes>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        {
          path:'all-users',
          element:<AllUsers></AllUsers>
        }
      ]
    }
  ]);
export default router;