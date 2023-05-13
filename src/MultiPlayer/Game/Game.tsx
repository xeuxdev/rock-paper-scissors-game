import { useContext, useEffect } from "react"
import { MultiPlayerGameContext } from "../MultiPlayerContext"
import GameDefault from "./GameDefault"
import GameResults from "./GameResults"

const Game = () => {
  const { playerChoice, playerScore, player2Score } = useContext(
    MultiPlayerGameContext
  )

  useEffect(() => {
    localStorage.setItem("multi-playerScore", `${playerScore}`)
    localStorage.setItem("multi-player2Score", `${player2Score}`)
  }, [playerScore, player2Score])

  return <div>{playerChoice === "" ? <GameDefault /> : <GameResults />}</div>
}

export default Game
