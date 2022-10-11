import { useContext } from "react"
import { GameContext } from "../contexts/GameContext"
import { GameDefault, GamePlay, GameResults } from "../index"

const Game = () => {
  const { playerChoice, setAiChoice, setScore } = useContext(GameContext)

  const aiOptions: string[] = ["paper", "scissors", "rock"]

  const randomize = () => {
    let randomNumber = Math.ceil(Math.round(Math.random() * 3))
    console.log(randomNumber)
    return randomNumber
  }
  console.log(aiOptions)
  console.log(randomize())

  return (
    <div>
      {playerChoice === "" ? <GameDefault /> : <GamePlay />}
      <button onClick={() => randomize()}>click</button>
      {/* <GameDefault /> */}
      {/* <GamePlay /> */}
      {/* <GameResults /> */}
    </div>
  )
}

export default Game
