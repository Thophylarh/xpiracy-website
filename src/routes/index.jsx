import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../components/layouts/WebLayout";
import React from "react";
import Hero from "../pages/landingpage/Hero";
import Home from "../pages/landingpage/Home";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        // index: true,
        element: <WebLayout />,
        children: [{ element: <Home />, path: "/" }],
      },
     
    ],
  },
]);

export default router;