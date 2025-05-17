import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AddCofee from "../pages/AddCofee/AddCofee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";
import CoffeeDetails from "../pages/CoffeeDetails/CoffeeDetails";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import Users from "../components/Users/Users";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/> ,
    children: [
        {
            index: true,
            loader: ()=>fetch('https://coffee-store-server-omega-nine.vercel.app/coffees'),
            Component: Home
        },
        {
            path: 'addCoffee',
            Component: AddCofee
        },
        {
            path: '/coffees/:id',
            loader: ({params})=> fetch(`https://coffee-store-server-omega-nine.vercel.app/coffees/${params.id}`),
            Component: CoffeeDetails
        },
        {
            path: 'updateCoffee/:id',
            loader: ({params})=> fetch(`https://coffee-store-server-omega-nine.vercel.app/coffees/${params.id}`),
            Component: UpdateCoffee
        },
        {
          path: 'signIn',
          Component: SignIn
        },
        {
          path: 'signUp',
          Component: SignUp
        },
        {
          path: '/users',
          loader: ()=> fetch('https://coffee-store-server-omega-nine.vercel.app/users'),
          Component: Users
        }
    ]
  },
]);