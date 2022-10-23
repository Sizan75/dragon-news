import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Category from "../../layouts/Pages/Catagory/Category";
import Home from "../../layouts/Pages/Home/Home";
import Login from "../../layouts/Pages/Login/Login/Login";
import Register from "../../layouts/Pages/Login/Register/Register";
import News from "../../layouts/Pages/News/News";

export const routes=createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/news')
        },
        {
            path: '/category/:id',
            element:<Category></Category>,
            loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
        }
       , {
            path: '/news/:id',
            element:<News></News>,
            loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
    ]
}
])