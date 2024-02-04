import React, { useState } from "react"
import styles from "./Cube.module.css"
import Rules from "../Rules/Rules"


export default function Cube({ diceNumber, randomDiceNumberGenerator, setTotalScore }) {
    const [rules, setRules] = useState(false)
    
    function toggleRules() {
        setRules((prev) => !prev)
    }

    return(
        <>
            <div className={styles.gameContainer}>
                <div>
                    <div className={styles.cubeContainer}>
                        <img src={`/images/dice_${diceNumber}.svg`} onClick={() => {randomDiceNumberGenerator(1, 7)}}/>
                        <p>Click to roll the Dice</p>
                    </div>
                    <div className={styles.gameButtons}>
                        <button className={styles.resetBtn} onClick={()=>setTotalScore(0)}>Reset Score</button>
                        <button className={styles.rulesBtn} onClick={toggleRules}>{ rules ? "Hide" : "Show" } Rules</button>
                    </div>
                </div>
            </div>
            { rules && <Rules/> }
        </>
    )
}