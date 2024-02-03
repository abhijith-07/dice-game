import styles from "./TotalScore.module.css"

export default function TotalScore() {
    return(
        <div className={styles.scoreContainer}>
            <div className={styles.score}>0</div>
            <p>Total Score</p>
        </div>
    )
}