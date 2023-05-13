import { useContext } from "react"
import { GameContext } from "../contexts/GameContext"

const Reset = () => {
  const {
    setGameResult,
    setAiChoice,
    setPlayerScore,
    setAiScore,
    setPlayerChoice,
  } = useContext(GameContext)

  const handleResetScores = () => {
    setPlayerScore(0)
    setAiScore(0)
    setPlayerChoice("")
    setAiChoice("")
    setGameResult("")
  }

  return (
    <button
      className="uppercase w-32 h-11 grid place-items-center  text-Header font-bold border-2 border-Header rounded-lg hover:text-white duration-300 hover:border-white z-30"
      aria-label="Reset"
      onClick={handleResetScores} //when clicked call the resets score
    >
      Reset
    </button>
  )
}

export default Reset
