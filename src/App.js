import { RouterProvider } from "react-router";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import CurrentBody from "./Components/CurrentBody";
import Header from "./Components/Header";
import MainBody from "./Components/MainBody";
import NextBody from "./Components/NextBody";
import OurPlan from "./Components/OurPlan";
import OurServices from "./Components/OurServices";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Header/>
  },
  {
    path:"/plans",
    element:<OurPlan/>
  },
  {
    path:"/services",
    element:<OurServices/>
  },
  {
    path:"/about",
    element:<AboutUs/>
  },
]);

const App = () => {
  return (
   <RouterProvider router={router}/>
  );
};

export default App;
