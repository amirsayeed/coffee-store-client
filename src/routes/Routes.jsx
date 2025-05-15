import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AddCofee from "../pages/AddCofee/AddCofee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: 'addCoffee',
            Component: AddCofee
        },
        {
            path: 'updateCoffee',
            Component: UpdateCoffee
        }
    ]
  },
]);