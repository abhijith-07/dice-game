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
            <div className={styles.gameContainer}>
                <div>
                    <div className={styles.cubeContainer}>
                        <img src="/images/dice_1.svg" alt="" />
                        <p>Click to roll the Dice</p>
                    </div>
                    <div className={styles.gameButtons}>
                        <button className={styles.resetBtn}>Reset Score</button>
                        <button className={styles.rulesBtn}>Show Rules</button>
                    </div>
                </div>
            </div>
            <div className={styles.rulesContainer}>
                <div>
                    <h2>How to play dice game</h2>
                    <p>Select any number</p>
                    <p>Click on dice image</p>
                    <p>After clicking on dice, if selected number is equal to dice number, you will get same point as dice</p>
                    <p>If you get wrong guess then 2 point will be deducted</p>
                </div>
            </div>
        </>
    )
}