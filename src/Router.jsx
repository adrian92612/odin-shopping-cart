import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Routes/Root";
import Home from "./Routes/Home";
import ShopPage from "./Routes/ShopPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/shop",
          element: <ShopPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
