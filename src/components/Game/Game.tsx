import { useContext } from "react"
import { GameContext } from "../contexts/GameContext"
import { GameDefault, GameResults } from "../index"

const Game = () => {
  const { playerChoice, setScore } = useContext(GameContext)

  return <div>{playerChoice === "" ? <GameDefault /> : <GameResults />}</div>
}

export default Game
