// import React from "react"
// import { ReactDOM } from "react-dom/client";

// /*
// <div id ="parent">
//   <div id="child">
//   <h1>I in H1 tag<h1>
//   </div>

// </div>
// */ 
// // const heading1 = React.createElement(
// //   "div",
// //   { id: "parent", className: "customStyle" },
// //   React.createElement("div", {id: "child"},
// //   React.createElement("h1", {id: "child"}, "I am in nesting h1")
// // ));
// const heading = React.createElement("h1", {}, "I am in nesting h1");
// const rootEle = rootReactDOM.createRoot(document.getElementById('root'))

// rootEle.render(heading);

import React from "react";
import  ReactDOM  from "react-dom/client";

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
    React.createElement("h1", {}, "I'm in h1 tag "),
    React.createElement("h1", {}, "I'm in h1 tag "),
    ]),
    React.createElement("div", {id: "child2"}, [
    React.createElement("h1", {}, "I'm in h1 of child 2tag "),
    React.createElement("h1", {}, "I'm in h1  of child 2 sibling tag "),
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
