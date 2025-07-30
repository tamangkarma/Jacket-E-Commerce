import { createBrowserRouter } from "react-router";
import { Mainlayout } from "../Layout/mainLayout";
import HomePage from "../Pages/homePage";
import ShopPage from "../Pages/shopPage";
import ContactPage from "../Pages/contactPage";
import Account from "../component/Header/myAccount/account";

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
        path: "/account",
        element: <Account/>
      },
      {
        path: "/contact us",
        element: <ContactPage />,
      },
    ],
  },
]);
