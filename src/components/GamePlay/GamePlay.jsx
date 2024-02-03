import styles from "./GamePlay.module.css"

import TotalScore from "../TotalScore/TotalScore"
import DiceNumber from "../DiceNumber/DiceNumber"
import Cube from "../Cube/Cube"

export default function GamePlay() {

    return(
        <>
            <nav>
                <TotalScore />
                <DiceNumber />
            </nav>
            <Cube />
        </>
    )
}

