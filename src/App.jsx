import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Home from "./page/Home";
import LayoutOne from "./Layout/LayoutOne";

const App = () => {
  const MyRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={MyRoute}></RouterProvider>
    </>
  );
};

export default App;
