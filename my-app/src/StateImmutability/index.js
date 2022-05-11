import React, { useState } from "react";


const initialState = {
    fName: 'Will',
    lName: 'Sutton'
}

export const StateImmutability = () => {
    const [name, setName] = useState(initialState);
    

    const nameChange = () => {
        // name.fName = 'Ernest';
        // name.lName = 'Bruno';
        // console.log(name);

        const copy = {...name}
        copy.fName = 'Ernest';
        copy.lName = 'Bruno';
        console.log(copy);
        setName(copy);
    }
    console.log('rendere')
    return (
        <div>
            <button onClick={nameChange}>{name.fName} {name.lName}</button>
        </div>
    );
};
