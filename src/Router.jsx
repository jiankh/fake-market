import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/Root";
import Products from "./routes/Products";
import Details from "./routes/Details";
import Cart from "./routes/Cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
        path: "/products",
        element: <Products />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/products/:id",
        element: <Details />,
        errorElement: <ErrorPage />
    },
    {
        path: "/products/mens",
        element: <Products category={"men's clothing"} />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/products/womens",
        element: <Products category={"women's clothing"} />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/products/jewelery",
        element: <Products category={"jewelery"} />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/products/electronics",
        element: <Products category={"electronics"} />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/products/:id",
        element: <Details />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/cart",
        element: <Cart />,
        errorElement: <ErrorPage />
    }
    

  ]);

  return <RouterProvider router={router} />;
};

export default Router;