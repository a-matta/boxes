import React from "react";


const changeNameHandler = () => {
    console.log("Hello from box");
};
const Box = (props) => {
    return (
        <div className="box">
            <h2> Name:{props.name}</h2>
            <p> Title:{props.title}</p>
            <p> Age: {props.age}</p>
            <button onClick={changeNameHandler}>Click Me</button>
        </div>
    );
};
export default Box;

