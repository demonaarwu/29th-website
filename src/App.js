import './App.css';
import * as React from "react";
import Home from './Home'
import Announcement from './Announcement';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {path: "/", element: <Home/>,},
    {path: "/announcements", element: <Announcement/>},
]);

function App() {
	return (
	    <React.StrictMode>
	    <RouterProvider router={router} />

	    </React.StrictMode>
	);
}

export default App;
