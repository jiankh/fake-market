import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/Root";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <ErrorPage />,
            // loader: rootLoader,
            // action: rootAction,
            // children: [
            //     {
            //         errorElement: <ErrorPage />,
            //         children: [
            //             { index: true, element: <Index /> },

            //             // {
            //             //     path: "contacts/:contactId",
            //             //     element: <Contact />,
            //             //     loader: contactLoader,
            //             //     action: contactAction
            //             // },
            //             // {
            //             //     path: "contacts/:contactId/edit",
            //             //     element: <EditContact />,
            //             //     loader: contactLoader,
            //             //     action: editAction
            //             // },
            //             // {
            //             //     path: "contacts/:contactId/destroy",
            //             //     action: destroyAction,
            //             //     errorElement: <div> Oops! There was an error.</div>
            //             // }
            //         ]
            //     }

            // ]
        },
    ]);
    return <RouterProvider router={router} />;
};

export default Router;