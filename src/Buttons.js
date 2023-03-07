import React, {useState} from 'react';
import FirstGame from "./firstGame3x4/FirstGame";
import SecondGame from "./secondGame4x5/SecondGame";


const Button = () => {

    const [GameIsOpen, setGameIsOpen] = useState(false)
    const [GameIsOpen1, setGameIsOpen1] = useState(false)

    const newGameIsOpen = () => {
        setGameIsOpen(!GameIsOpen)
    };
    const newGameIsOpen1 = () => {
        setGameIsOpen1(!GameIsOpen1)
    };


    return (
        <div>
            <div>
                <button onClick={newGameIsOpen}>3x4</button>
                {GameIsOpen &&
                    <FirstGame/>
                }
            </div>

            <hr/>

            <div>

                <button onClick={newGameIsOpen1}>4x5</button>
                {GameIsOpen1 &&
                    <SecondGame/>
                }
            </div>


        </div>
    );

}

export default Button;
