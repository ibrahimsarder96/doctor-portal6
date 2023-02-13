import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import Appointment from "../../Appointment/Appointment/Appointment";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ]
  }
]);
export default router;