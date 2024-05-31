import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
import { Toaster } from 'react-hot-toast';

// import Home from './pages/Home';
// import Blogs from './pages/Blogs';
// import Bookmarks from './pages/Bookmarks';
// import MainLayout from './layout/MainLayout';
// import Blog from './components/Blog';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     // element: <Home></Home>,
//     element: <MainLayout></MainLayout>,
//     children:[
//       {
//         // path:'/',
//         index:true,
//         element:<Home></Home>
//       },
//       {
//         path: "/blogs",
//         element: <Blogs></Blogs>,
//         loader:()=>fetch('https://dev.to/api/articles?per_page=20&top=7')
//       },
//       {
//         path:"/blog/:id",
//         element:<Blog></Blog>,
//         loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`)


//         // path:"/blog/:idNum",
//         // loader:({params})=> fetch(`https://dev.to/api/articles/${params.idNum}`)
//       },
      
//       {
//         path: "/bookmarks",
//         element: <Bookmarks></Bookmarks>,
//       },
//     ]
//   },
  
// ]);



// To keep clean main.jsx, open a new component in src, then transfer router code in there and export from there;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </React.StrictMode>,
  
)
