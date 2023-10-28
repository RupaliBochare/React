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
const heading = <h1 className="head">Namaste React -- JSX 1st code</h1>;
 const Title2 = function () {
    (<h1> Namaste React using normal function </h1>)
 } 
const HeadingComponent = () => (
    <div id="container">
        <Title />
        
        <h2>{10+20}</h2>
        <h1>Namaste React by Rupali Bochare</h1>
    </div>
    
)

const Title = () => (<h1> Namaste React using JSX as title</h1>)

// function component 
 // can create using arrow and normal function also 
 //i.e 
// normal function as functional component will not work


root.render(<HeadingComponent />);
