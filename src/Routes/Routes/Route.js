import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Category from "../../layouts/Pages/Catagory/Category";
import Home from "../../layouts/Pages/Home/Home";
import News from "../../layouts/Pages/News/News";

export const routes=createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: '/category/:id',
            element:<Category></Category>
        }
       , {
            path: '/news/:id',
            element:<News></News>
        }
    ]
}
])