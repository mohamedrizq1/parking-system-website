import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <div>Login page</div>,
  },
  {
    path: "/booking",
    element: <div>booking list</div>,
  },
  // admin pages
  {
    path: "/admin",
    element: <div>admin dashboard</div>,
  },
  {
    path: "/admin/fines",
    element: <div>fines list</div>,
  },
  {
    path: "/admin/parking-zones",
    element: <div>fines list</div>,
  },
  {
    path: "/admin/users",
    element: <div>users list</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
