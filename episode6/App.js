

import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./component/Header"
import BodyComponent from "./component/Body";
import Contact from "./component/Contact";
import Error from "./component/Error"
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import AboutComponent from "./component/About";
/*
 Header component 
    logo
    Heading
    Menu
    About 
    Card
Body component 
    Search component 
    RestaurantContainer
    RestaurantCard
Footer component
    copy right
    links
    license
*/




const AppComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent></BodyComponent>
    </div>
  );
};

const appRouter = createBrowserRouter([
{path: "/", element : <AppComponent />,
  children: [
  {
    path: "/",
    element: <BodyComponent />,
    error: <Error />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/about",
    element: <AboutComponent />  
  }
  ]
}
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}> </RouterProvider>)

