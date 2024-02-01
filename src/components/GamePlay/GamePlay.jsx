import styles from "./GamePlay.module.css"

export default function GamePlay() {
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
        </>
    )
}