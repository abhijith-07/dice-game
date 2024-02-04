import styles from "./TotalScore.module.css"

export default function TotalScore({totalScore}) {
    return(
        <div className={styles.scoreContainer}>
            <div className={styles.score}>{totalScore}</div>
            <p>Total Score</p>
        </div>
    )
}