import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Categories from "./Components/Categories/Categories";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/products",
          element: <Products />,
          children: [
            { index: true, element: <Navigate to={"all"} replace /> },
            {
              path: ":category",
              element: <Categories />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
