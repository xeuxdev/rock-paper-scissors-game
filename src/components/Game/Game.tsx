import { useContext, useEffect } from "react"
import { GameContext } from "../contexts/GameContext"
import { GameDefault, GameResults } from "../index"

const Game = () => {
  const { playerChoice, playerScore, aiScore } = useContext(GameContext)

  useEffect(() => {
    localStorage.setItem("playerScore", `${playerScore}`)
    localStorage.setItem("aiScore", `${aiScore}`)
  }, [playerScore, aiScore])

  return <div>{playerChoice === "" ? <GameDefault /> : <GameResults />}</div>
}

export default Game
