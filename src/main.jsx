import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import WhoAmI from './components/pages/WhoAmI.jsx'
import Home from './components/pages/Home.jsx'
import Practice from './components/pages/Practice.jsx'
import SimulateResult from "./components/pages/SimulateResult.jsx";

const router = createBrowserRouter([{
  path: "/cpuSchedulingSimulator", 
  element: <App/>,
  children: [
    {
      path: "/cpuSchedulingSimulator/",
      element: <Home/>,
    },
  {
    path: "/cpuSchedulingSimulator/whoami",
    element: <WhoAmI/>,
  },
  {
    path: "/cpuSchedulingSimulator/whoami",
    element: <WhoAmI/>,
  },
  {
    path: "/cpuSchedulingSimulator/practice",
    element: <Practice/>,
  }]
},{
  path: "/cpuSchedulingSimulator/simulate",
  element: <SimulateResult/>,
}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
