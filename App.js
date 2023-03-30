//creating nesting div structure
//like below
/*
<div id ="parent">
  <div id="child">
  <h1>I in H1 tag<h1>
  </div>

</div>
*/ 
const heading = React.createElement(
  "div",
  { id: "parent", className: "customStyle" },
  React.createElement("div", {id: "child"},
  React.createElement("h1", {id: "child"}, "I am in nesting h1")
));
const rootEle = ReactDOM.createRoot(document.getElementById("test"));
rootEle.render(heading);
