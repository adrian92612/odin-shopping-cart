import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Categories from "./Pages/Categories/Categories";
import ProductDetails from "./Pages/ProductDetail/ProductDetails";
import { ErrorPage, NotFound } from "./Pages/ErrorPages/ErrorPages";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/products",
          element: <Products />,
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <Navigate to={"all"} replace /> },
            {
              path: ":category",
              element: <Categories />,
            },
            {
              path: "item/:productId",
              element: <ProductDetails />,
              errorElement: <ErrorPage />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
