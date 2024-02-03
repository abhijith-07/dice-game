import { useState } from "react"
import styles from "./DiceNumber.module.css"

export default function DiceNumber() {
    
    const [selectedNumber, setSelectedNumber] = useState()
    const diceNumber = [1, 2, 3, 4, 5, 6]

    return(
        <div className={styles.numberContainer}>
            <div className={styles.diceNumber}>
                {diceNumber.map((value, i) => (
                    <div className={styles.number} key={i} onClick={()=>{setSelectedNumber(value)}}>{value}</div>
                ))}
            </div>
            <p>Select Number</p>
        </div>
    )
}