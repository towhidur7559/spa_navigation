import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import Bookmarks from '../pages/Bookmarks';
import Blog from '../components/Blog';
import Content from '../components/Content';
import Author from '../components/Author';
import Ceo from "../components/Ceo";

export const router = createBrowserRouter([
    {
        path: "/",
        // element: <Home></Home>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                // path:'/',
                index: true,
                element: <Home></Home>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
                loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
            },
            {
                path: "/blog/:id",
                element: <Blog></Blog>,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),

                // path:"/blog/:idNum",
                // loader:({params})=> fetch(`https://dev.to/api/articles/${params.idNum}`)
                children: [
                    {
                        index: true,
                        element: <Content></Content>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                    },
                    {
                        path: 'author',
                        element: <Author></Author>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                    },
                    {
                        path: 'ceo',
                        element: <Ceo></Ceo>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                    }
                ]
            },

            {
                path: "/bookmarks",
                element: <Bookmarks></Bookmarks>,
            },
        ]
    },

]);