import React, { useState } from "react"
import styles from "./GamePlay.module.css"
import Rules from "../Rules/Rules"

export default function GamePlay() {
    
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
                        <div className={styles.number}>1</div>
                        <div className={styles.number}>2</div>
                        <div className={styles.number}>3</div>
                        <div className={styles.number}>4</div>
                        <div className={styles.number}>5</div>
                        <div className={styles.number}>6</div>
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