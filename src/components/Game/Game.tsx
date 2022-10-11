import { useContext } from "react"
import { GameContext } from "../contexts/GameContext"
import { GameDefault, GamePlay, GameResults } from "../index"

const Game = () => {
  const { playerChoice, aiChoice, setScore } = useContext(GameContext)

  return (
    <div>
      {playerChoice === "" ? <GameDefault /> : <GameResults />}
      {/* {playerChoice !== "" && aiChoice !== "" ? (
        <GameResults />
      ) : (
        <GameDefault />
      )} */}
      {/* <GameResults /> */}
    </div>
  )
}

export default Game
