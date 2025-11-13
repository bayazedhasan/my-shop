import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import About from './page/About/About';
import Contact from './page/Contact/Contact';
import Blog from './page/Blog/Blog';
import ShopNow from './page/ShopNow/ShopNow';
import Home from './page/Home/Home';
import SingleProductPage from './page/Home/SingleProductPage/SingleProductPage';
import Deals from './page/Deals/Deals';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index:true,
        element: <Home></Home>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      },
      {
        path:"/blog",
        element: <Blog></Blog>
      },
      {
        path:"/shop",
        element: <ShopNow></ShopNow>
      },
      {
        path:"/shop/:id",
        element: <SingleProductPage></SingleProductPage>
      },
      {
        path:"/deals",
        element: <Deals></Deals>
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);



