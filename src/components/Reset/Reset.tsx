import { useContext, useEffect } from "react"
import { GameContext } from "../contexts/GameContext"

const Reset = () => {
  const { playerScore, aiScore, setPlayerScore, setAiScore } =
    useContext(GameContext)

  const handleResetScores = () => {
    //@ts-ignore
    setPlayerScore((prev) => prev - prev)
    //@ts-ignore
    setAiScore((prev) => prev - prev)
  }

  useEffect(() => {
    //@ts-ignore
    localStorage.setItem("playerScore", playerScore)
    //@ts-ignore
    localStorage.setItem("aiScore", aiScore)
  }, [playerScore, aiScore])

  return (
    <button
      className="absolute bottom-0 right-[60%]  md:right-[80%] md:-translate-x-0 uppercase w-32 h-11 grid place-items-center  text-Header font-bold border-2 border-Header rounded-lg mb-10 hover:text-white duration-300 hover:border-white z-30 mt-6"
      aria-label="show Rules"
      onClick={handleResetScores} //when clicked call the resets score
    >
      Reset
    </button>
  )
}

export default Reset
