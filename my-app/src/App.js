import logo from "./logo.svg";
import "./App.css";
// import { UseState } from "./UseState";
// import { Parent } from "./ParentChild";
// import { StateImmutability } from "./StateImmutability";
// import { RestartButton } from "./ReactStateProps/RestartButton";
// import { UserInteraction } from "./ReactStateProps/UserInteractions";
import { Friends } from "./ReactStateProps/Friends";

function App() {
    return (
        <div className="App">
            {/* <UseState /> */}
            {/* <Parent /> */}
            {/* <StateImmutability /> */}
            {/* <RestartButton gameOver={true}/> */}
            {/* <UserInteraction /> */}
            <Friends />
        </div>
    );
}

export default App;
