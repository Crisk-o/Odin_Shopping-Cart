import ErrorPage from "./ErrorPage";
import Layout from "./layouts/Layout";
import Shop from "./Shop";
import Home from "./Home";
import Cart from "./Cart";
const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "error",
        element: <ErrorPage />,
      }
    ]
}
];

export default routes;