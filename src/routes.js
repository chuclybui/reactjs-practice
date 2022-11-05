import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";

const pages = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />,
  },
];

export default pages;
