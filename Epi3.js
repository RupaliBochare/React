import React from "react";
import  ReactDOM  from "react-dom/client";

//Coding1: Create a Nested header element using React.createElement(h1,h2,h3 inside a div tag with class title)
const parent = React.createElement("div", { id: "title" }, [
  React.createElement("h1", {}, "in h1 tag"),
  React.createElement("h2", {}, [
    React.createElement("p", {}, "in nested h2 child")
  ]),
  React.createElement("h3", {}, "in h3"),
 
]);
//root.render(parent);
//Coding1.1: Creating the same element using the JSX:
const parentWithJSX = (
    <div id="title">
        <h1>in h1 tag from jsx component</h1>
        
        <h2><p>in nested h2 child</p></h2>
        <h3>in h3</h3>
    </div>
)
let root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(parentWithJSX);

//Coding1.2: Creating the functional component of the same with JSX:
const JsxFunctionalComponent = function () {
    return parentWithJSX;
} 

const JsxFunctionalComponentWithArrowFunction = () => {
   return (<div> with arrow function component</div>)
}
//root.render( <JsxFunctionalComponentWithArrowFunction />)
//root.render(<JsxFunctionalComponent />);

//Coding1.3: Pass attributes into tag in JSX:
// here className id are attribute 
const attributes = {
     src: "image.jpg",
  alt: "An image",
  className: "img-class",
}
const JsxWithArguments = () => {
   return (<div className="title">
    <img {...attributes} />;
        <h1>{8+2}</h1>
        <h2 id="h2elem"> in h2</h2>
     </div>)
}

//root.render( <JsxWithArguments />)

//Coding1.4: Add component inside another component (Component Composition):
 
const titletest = () => {
   return (<div> with arrow function component</div>)
}

//root.render(<titletest />); // below code will not work as function component should alway start from Capital words 
const Title = () => {
    return (<div>Title </div>) 
}
 const headingStyle = {
    color: 'red',
  };
const MainComponent = () => {
    return (<div id="heading">
        <h1 style={headingStyle}>Header Component</h1>
        <Title/>
    </div>)
    
}
root.render(<MainComponent />);

//Coding2: Create a Header component from scratch using functional components with JSX:
//1) Add  a logo on left
//2) Add  a search bar in middle
//3) Add user icon on right
//4) Add CSS to make it look nice


const HeaderComponent =() =>{
    return (
        // <div class="container">
        //     <img className='left-image' src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" height={50} width={50} />
        //     <input type="text" id="gsearch" name="gsearch" />
        //     <img className='right-image' src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg" height={50} width={50} />
        // </div>

         <div className='container'>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp" alt="React Logo" className='left-image' height={50} width={50}/>
                <input type="text" placeholder='Search...' className='center-input'/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9ujoPAkpfh1SeeY54_MdaxPfwBF739WurHRBoKmFuw&s" alt="UserIcon" className='right-image' height={50} width={50}/>
        </div>
    )
}

root.render(<HeaderComponent />)