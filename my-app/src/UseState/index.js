import React, { useState } from "react";

export const UseState = () => {
    const [count, setCount] = useState(0);
    console.log("render");
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <button onClick={() => setCount(0)}>Make 0</button>
            <button onClick={() => setCount(5)}>Make 5</button>
        </div>
    );
};
