import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import Contact from "../components/sections/Contact";
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
                path: '/contact',
                element:<Contact/>
            }
            ]
    }
])