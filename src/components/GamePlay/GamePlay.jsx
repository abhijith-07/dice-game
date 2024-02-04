import styles from "./GamePlay.module.css"

import TotalScore from "../TotalScore/TotalScore"
import DiceNumber from "../DiceNumber/DiceNumber"
import Cube from "../Cube/Cube"
import { useState } from "react";

export default function GamePlay() {
    const [selectedNumber, setSelectedNumber] = useState();
    const [diceNumber, setDiceNumber] = useState(1)
    const [totalScore, setTotalScore] = useState(0)

    const [errorMessage, setErrorMessage] = useState("")

    function randomDiceNumberGenerator(min, max) {
        if(!selectedNumber){
            setErrorMessage("Select a Number")
        } else {
            const randomNumber = Math.floor(Math.random() * (max - min) + min) 
            setDiceNumber(randomNumber)

            if(selectedNumber === randomNumber) {
                setTotalScore((prev)=> prev + randomNumber)
            } else {
                setTotalScore((prev)=> prev - 2)
            }
            setSelectedNumber(undefined)
        }
    }

    return(
        <>
            <nav>
                <TotalScore totalScore={totalScore}/>
                <DiceNumber selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
            </nav>
            <Cube diceNumber={diceNumber} randomDiceNumberGenerator={randomDiceNumberGenerator} setTotalScore={setTotalScore} />
        </>
    )
}

