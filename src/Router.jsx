import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/Root";
import Products from "./routes/Products";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      // loader: rootLoader,
      // action: rootAction,
    },
    {
        path: "products/all",
        element: <Products />,
        errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;