import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routePaths } from "../../../shared/config/routePaths";

import { Home } from "../../../pages/home/ui/Home";
import { About } from "../../../pages/about/ui/About";
import { Product } from "../../../pages/product/ui/Product";
import { Products } from "../../../pages/products/ui/Products";
import App from "../../layout/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: routePaths.home, element: <Home /> },
      { path: routePaths.about, element: <About /> },
      { path: routePaths.products, element: <Products /> },
      {
        path: routePaths.product,
        element: <Product />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
