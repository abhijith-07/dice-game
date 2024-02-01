import styles from "./StartGame.module.css"

export default function StartGame(props) {
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    <img src="images/dices.svg" alt="" />
                </div>
                <div className={styles.heroSection}>
                    <h1 className={styles.heroTitle}>DICE GAME</h1>
                    <button className={styles.playButton} onClick={props.toggle}>Play Now</button>
                </div>
            </div>
        </div>
    )
}