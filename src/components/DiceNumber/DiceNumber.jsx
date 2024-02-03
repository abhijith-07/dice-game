import styles from "./DiceNumber.module.css"

export default function DiceNumber() {
    const diceNumber = [1, 2, 3, 4, 5, 6]

    return(
        <div className={styles.numberContainer}>
            <div className={styles.diceNumber}>
                {diceNumber.map((value, i) => (
                    <div className={styles.number} key={i}>{value}</div>
                ))}
            </div>
            <p>Select Number</p>
        </div>
    )
}