import { useContext } from "react"
import { GameContext } from "../contexts/GameContext"
import { GameDefault, GamePlay, GameResults } from "../index"

const Game = () => {
  const game = useContext(GameContext)
  return (
    <div>
      {game?.playerChoice === "" ? <GameDefault /> : <GamePlay />}
      {/* <GameDefault /> */}
      {/* <GamePlay /> */}
      {/* <GameResults /> */}
    </div>
  )
}

export default Game
