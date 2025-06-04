import {
  createBrowserRouter
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
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "../context/PrivateRoute";
import UserDetails from "../pages/UserDetails/UserDetails";
import UpdateUser from "../pages/UpdateUser/UpdateUser";
import MyAddedCoffees from "../pages/MyAddedCoffees/MyAddedCoffees";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/> ,
    children: [
        {
            index: true,
            loader: ()=>fetch('https://coffee-store-server-omega-nine.vercel.app/coffees'),
            hydrateFallbackElement: <div className="flex justify-center"><span className="loading loading-bars loading-xl"></span></div>,
            Component: Home
        },
        {
            path: 'addCoffee',
            element: <PrivateRoute><AddCofee/></PrivateRoute>
        },
        {
            path: '/coffees/:id',
            loader: ({params})=> fetch(`https://coffee-store-server-omega-nine.vercel.app/coffees/${params.id}`),
            hydrateFallbackElement: <div className="flex justify-center"><span className="loading loading-bars loading-xl"></span></div>,
            element: <PrivateRoute><CoffeeDetails/></PrivateRoute>
        },
        {
            path: 'updateCoffee/:id',
            loader: ({params})=> fetch(`https://coffee-store-server-omega-nine.vercel.app/coffees/${params.id}`),
            hydrateFallbackElement: <div className="flex justify-center"><span className="loading loading-bars loading-xl"></span></div>,
            element: <PrivateRoute><UpdateCoffee/></PrivateRoute>
        },
        {
          path:'myCoffees/:email',
          loader: ({params})=> fetch(`https://coffee-store-server-omega-nine.vercel.app/myCoffees/${params.email}`),
          element:<PrivateRoute><MyAddedCoffees/></PrivateRoute>
        },
        {
          path: '/users',
          loader: ()=> fetch('https://coffee-store-server-omega-nine.vercel.app/users'),
          hydrateFallbackElement: <div className="flex justify-center"><span className="loading loading-bars loading-xl"></span></div>,
          Component: Users
        },
        {
          path: '/users/:id',
          loader: ({params})=> fetch(`https://coffee-store-server-omega-nine.vercel.app/users/${params.id}`),
          hydrateFallbackElement: <div className="flex justify-center"><span className="loading loading-bars loading-xl"></span></div>,
          Component: UserDetails
        },
        {
          path: '/updateUser/:id',
          loader: ({params})=> fetch(`https://coffee-store-server-omega-nine.vercel.app/users/${params.id}`),
          hydrateFallbackElement: <div className="flex justify-center"><span className="loading loading-bars loading-xl"></span></div>,
          Component: UpdateUser
        }
    ]
  },
  {
    path: '/auth',
    Component: AuthLayout,
    errorElement: <ErrorPage/>,
    children: [
        {
          path: 'signin',
          Component: SignIn
        },
        {
          path: 'signUp',
          Component: SignUp
        }
    ]
  }
]);