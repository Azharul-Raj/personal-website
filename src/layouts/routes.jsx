import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import Blog from "../components/sections/Blog/Blog";
import Details from "../components/sections/Details/Details";
import Main from "./Main";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element:<HomePage/>
            },
            {
                path: '/project/:id',
                element: <Details />,
                loader:({params})=>fetch(`http://localhost:3001/project/${params.id}`)
            },
            {
                path: '/blog',
                element:<Blog/>
            }
            ]
    }
])