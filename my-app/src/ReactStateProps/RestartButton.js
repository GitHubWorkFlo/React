import React from "react";


export const RestartButton = (props) => {
    return props.gameOver ? <button>Restart</button> : null;
};
