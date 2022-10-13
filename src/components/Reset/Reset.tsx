import { useContext } from "react"
import { GameContext } from "../contexts/GameContext"

const Reset = () => {
  const { setPlayerScore, setAiScore } = useContext(GameContext)

  const handleResetScores = () => {
    setPlayerScore(0)
    setAiScore(0)
  }
  return (
    <button
      className="absolute bottom-0 right-[60%]  md:right-[80%] md:-translate-x-0 uppercase w-32 h-11 grid place-items-center  text-Header font-bold border-2 border-Header rounded-lg mb-10 hover:text-white duration-300 hover:border-white z-30 mt-6"
      aria-label="show Rules"
      onClick={() => handleResetScores} ////when clicked call the resets score
    >
      Reset
    </button>
  )
}

export default Reset