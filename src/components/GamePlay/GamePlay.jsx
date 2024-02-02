import React, { useState } from "react"
import styles from "./GamePlay.module.css"
import Rules from "../Rules/Rules"

export default function GamePlay() {
    
    const diceNumber = [1, 2, 3, 4, 5, 6]

    const [rules, setRules] = useState(false)

    function toggleRules() {
        setRules((prev) => !prev)
    }

    return(
        <>
            <nav>
                <div className={styles.scoreContainer}>
                    <div className={styles.score}>0</div>
                    <p>Total Score</p>
                </div>
                <div className={styles.numberContainer}>
                    <div className={styles.diceNumber}>
                        {diceNumber.map((value, i) => (
                            <div className={styles.number} key={i}>{value}</div>
                        ))}
                    </div>
                    <p>Select Number</p>
                </div>
            </nav>
            <div className={styles.gameContainer}>
                <div>
                    <div className={styles.cubeContainer}>
                        <img src="/images/dice_1.svg" alt="" />
                        <p>Click to roll the Dice</p>
                    </div>
                    <div className={styles.gameButtons}>
                        <button className={styles.resetBtn}>Reset Score</button>
                        <button className={styles.rulesBtn} onClick={toggleRules}>{ rules ? "Hide" : "Show" } Rules</button>
                    </div>
                </div>
            </div>
            { rules && <Rules/> }
        </>
    )
}