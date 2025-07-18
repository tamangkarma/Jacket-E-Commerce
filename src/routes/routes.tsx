import { createBrowserRouter } from "react-router";
import { Mainlayout } from "../Layout/mainLayout";
import HomePage from "../Pages/homePage";
import ShopPage from "../Pages/shopPage";
import ProductPage from "../Pages/productPage";
import ContactPage from "../Pages/contactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/contact us",
        element: <ContactPage />,
      },
    ],
  },
]);
