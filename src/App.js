import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import FirstGame from "./firstGame3x4/FirstGame";
import SecondGame from "./secondGame4x5/SecondGame";
import {findAllByDisplayValue} from "@testing-library/react";

function App() {
    const [GameIsOpen, setGameIsOpen] = useState(false)

    const newGameIsOpen = () => {
        setGameIsOpen(!GameIsOpen)
    };

    return (

        <div className="welcome">
            <h1>Chose the game!!!</h1>
            <hr/>

            <button onClick={newGameIsOpen}>3x4</button>
            {GameIsOpen &&
                <FirstGame/>
            }
<hr/>
            <button onClick={newGameIsOpen}>4x5</button>
            {GameIsOpen &&
                <SecondGame/>
            }
    </div>

    )
}
export default App;