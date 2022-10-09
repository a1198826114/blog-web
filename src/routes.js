import { Navigate } from "react-router-dom";
import React, { lazy } from "react";
const Home = lazy(() => import("./views/Home/index.js"));
export default [
  {
    path: "/",
    element: <Navigate to="/home" />, //Navigate就是以前的Redirect
  },
  {
    path: "/home",
    element: <Home />,
  },
];
