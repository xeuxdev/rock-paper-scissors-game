import { useContext } from "react"
import { MultiPlayerGameContext } from "../MultiPlayerContext"
import { useNavigate } from "react-router-dom"

function Clear() {
  const { socket } = useContext(MultiPlayerGameContext)
  const items = [
    "roomId",
    "creator",
    "joined",
    "multi-playerScore",
    "multi-player2Score",
    "player1Username",
    "player2Username",
  ]
  const navigate = useNavigate()

  const refreshPage = () => {
    navigate(0)
  }

  const handleDisconnect = () => {
    socket.emit("leave_room", {
      roomId: sessionStorage.getItem("roomId"),
    })
    socket.disconnect()
    items.map((item) => {
      sessionStorage.removeItem(item)
    })
    refreshPage()
  }

  return (
    <>
      <button
        className="uppercase w-32 h-11 grid place-items-center  text-Header font-bold border-2 border-Header rounded-lg hover:text-white duration-300 hover:border-white z-30"
        aria-label="Reset"
        onClick={handleDisconnect} //when clicked call the resets score
      >
        Disconnect
      </button>
    </>
  )
}

export default Clear
