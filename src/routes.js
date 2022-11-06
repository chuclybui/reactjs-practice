import React from "react";
import Home from "./pages/home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

const pages = [
  {
    name: "Home",
    menu: ["Home"],
    path: "/",
    element: <Home />,
  },
  {
    name: "Register",
    menu: ["User", "Register"],
    path: "/register",
    element: <Register />,
  },
  {
    name: "Login",
    menu: ["User", "Login"],
    path: "/login",
    element: <Login />,
  },
];

export default pages;
