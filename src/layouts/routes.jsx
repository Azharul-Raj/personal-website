import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import Blog from "../components/sections/Blog/Blog";
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
                path: '/blog',
                element:<Blog/>
            }
            ]
    }
])