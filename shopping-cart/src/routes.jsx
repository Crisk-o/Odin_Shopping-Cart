import ErrorPage from "./ErrorPage";
import Shop from "./Shop";
import Home from "./Home";
import Cart from "./Cart";
const routes = [
   {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
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
];

export default routes;