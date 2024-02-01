import { useState } from "react"
import StartGame from "./components/StartGame/StartGame"
import GamePlay from "./components/GamePlay/GamePlay"

export default function App() {
    const [gameStarted, setGameStarted] = useState(false)

    function toggleGameStarted() {
        setGameStarted((value) => !value)
    }

    return(
        <>
        {gameStarted?<GamePlay/>:<StartGame toggle={toggleGameStarted} />}
        </>
    )
}