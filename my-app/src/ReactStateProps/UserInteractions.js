import React, { useState } from "react";

export const UserInteraction = (props) => {
    const [showing, setShowing] = useState(true);

    return (
        <div className="main">
            <button onClick={() => setShowing(!showing)}>Toggle State</button>
            {showing && <p>Can you see me now?</p>}
            <div>{showing ? <p>Can you see me now?</p> : null}</div>
            <p style={ showing ? {display: 'none'} : {display:'block'}}>Can you see me now?</p>
        </div>
    );
};
