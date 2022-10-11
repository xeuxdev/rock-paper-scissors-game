import { useContext } from "react"
import { GameContext } from "../contexts/GameContext"
import { GameDefault, GamePlay, GameResults } from "../index"

const Game = () => {
  const { playerChoice, setAiChoice, setScore } = useContext(GameContext)

  return (
    <div>
      {playerChoice === "" ? <GameDefault /> : <GamePlay />}

      {/* <GameResults /> */}
    </div>
  )
}

export default Game
