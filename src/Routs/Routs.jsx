import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import Application from "../Pages/Application";
import Installation from "../Pages/Installation";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    errorElement:<ErrorPage/>,
    children:[
        {
    path: "/Home",
    element:<Home/>,
  loader: () => fetch('./Home.json'),
   
        },
        {
    path: "/Application",
    element:<Application/>
       },

       {
    path: "/Installation",
    element:<Installation/>
      },

    ],
},
]);

export default router;