import React, { useState } from "react"
import styles from "./GamePlay.module.css"
import Rules from "../Rules/Rules"
import TotalScore from "../TotalScore/TotalScore"
import DiceNumber from "../DiceNumber/DiceNumber"

export default function GamePlay() {

    const [rules, setRules] = useState(false)

    function toggleRules() {
        setRules((prev) => !prev)
    }

    return(
        <>
            <nav>
                <TotalScore />
                <DiceNumber />
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