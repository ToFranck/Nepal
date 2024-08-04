import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Roots from "./routes/Roots.jsx";
import Home from "./pages/home/Home.jsx";
import Albumdetails from "./pages/albumdetails/Albumdetails.jsx";
import Bio from "./pages/bio/Bio.jsx";
import Sigledetails from "./pages/singlesdetails/Singledetails.jsx";

import Layout from "./components/layout/Layout.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Roots />,
    children: [
      { path: "/", element: <Layout> <Home /></Layout> },
      { path: "/:title", element: <Layout><Albumdetails /></Layout> },
      { path: "/sigles", element: <Layout><Sigledetails /></Layout> },
      { path: "/Bio", element: <Layout><Bio /></Layout> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
