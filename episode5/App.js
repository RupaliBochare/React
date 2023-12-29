

import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./component/Header"
import BodyComponent from "./component/Body";

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


//root.render(<HeaderComponent />);

// const HeaderComponent = () => {
//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img
//           className="logo"
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFo9rJTF1-VqhoC2oaTpS9Zez3zDiuao94cQ&usqp=CAU"
//           alt="React Logo"
//         />
//       </div>
//       <div className="nav-item">
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact us</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };









const AppComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent></BodyComponent>
    </div>
  );
};
let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
