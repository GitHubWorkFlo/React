import React from "react";

export const Child = (props) => {
    console.log("render child");
    return (
       <h1>Hello from the child!. my count is {props.count}</h1>
    );
};
