import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import First from './Component/First/First';
import Friend from './Component/Friend/Friends';
import FriendDtel from './Component/FriendDtel/FriendDtel';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <First></First>
      },
      {
        path: 'friends',
        element: <Friend></Friend>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')

      },
      {
        path:'friend/:friendId',
        element:<FriendDtel></FriendDtel>,
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path:'*',
        element:<div>404 Not Found</div>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);