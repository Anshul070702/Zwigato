import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

/*
  Header
    -> Logo
    -> Nav Items
  Body
    -> Search
    -> Restaurant Container
    -> Restaurant App
      ->Restaurant Card
        -> Img
        -> Name, Cuisine, delivery time
  Footer
    -> Copyright
    -> Links
    -> Address
    -> Contact

*/

//Lazy-loading of Grocery page
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// Creating routing configuration.
const appRouter = createBrowserRouter([
  //takes list of path
  {
    path: "/",
    element: <AppLayout />,
    // creating children routes
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense
            fallback={
              <>
                <h1>Loading..</h1>
              </>
            }
          >
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
