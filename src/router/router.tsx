import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/layout";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Product from "../pages/product";
import Price from "../pages/Price";
import Company from "../pages/company";
import Resource from "../pages/Resource";
import Solution from "../pages/Solution";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/landingpage", element: <LandingPage /> },
      { path: "/product", element: <Product /> },
      { path: "/price", element: <Price /> },
      { path: "company", element: <Company /> },
      { path: "/resource", element: <Resource /> },
      { path: "/solution", element: <Solution /> },
    ],
  },
]);
