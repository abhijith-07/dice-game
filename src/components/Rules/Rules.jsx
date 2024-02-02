import styles from "./Rules.module.css"

export default function Rules() {
    return(
        <div className={styles.rulesContainer}>
            <div>
                <h2>How to play dice game</h2>
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>After clicking on dice, if selected number is equal to dice number, you will get same point as dice</p>
                <p>If you get wrong guess then 2 point will be deducted</p>
            </div>
        </div>
    )
}