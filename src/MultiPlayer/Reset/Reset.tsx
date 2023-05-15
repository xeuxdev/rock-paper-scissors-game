import { useContext } from "react"
import { MultiPlayerGameContext } from "../MultiPlayerContext"

const Reset = () => {
  const {
    setGameResult,
    setPlayer2Choice,
    setPlayerScore,
    setPlayer2Score,
    setPlayerChoice,
    socket,
  } = useContext(MultiPlayerGameContext)

  const handleResetScores = () => {
    setPlayerScore(0)
    setPlayer2Score(0)
    setPlayerChoice("")
    setPlayer2Choice("")
    setGameResult("")

    socket.emit("reset", {
      roomId: sessionStorage.getItem("roomId"),
    })
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
