import React, { useState } from "react";
import { Friend } from "./Friend";

export const Friends = () => {
    const [friends, setFriends] = useState([
        "Jeremy",
        "Will",
        "Elektra",
        "Tabitha",
    ]);
    const unfriend = () => {
        const newFriends = friends.slice(1);
        setFriends(newFriends);
    };
    return (
        <>
            <ul>
                {friends.map((friend) => (
                    <Friend key={friend} friend={friend} />
                ))}
            </ul>
            <button onClick={unfriend}>Unfriend Someone</button>
        </>
    );
};
