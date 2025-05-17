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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            index: true,
            loader: ()=>fetch('http://localhost:5000/coffees'),
            Component: Home
        },
        {
            path: 'addCoffee',
            Component: AddCofee
        },
        {
            path: '/coffees/:id',
            loader: ({params})=> fetch(`http://localhost:5000/coffees/${params.id}`),
            Component: CoffeeDetails
        },
        {
            path: 'updateCoffee/:id',
            loader: ({params})=> fetch(`http://localhost:5000/coffees/${params.id}`),
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
          loader: ()=> fetch('http://localhost:5000/users'),
          Component: Users
        }
    ]
  },
]);